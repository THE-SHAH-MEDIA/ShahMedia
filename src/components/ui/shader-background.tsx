'use client';

import React, { useEffect, useRef } from 'react';

type ShaderBackgroundProps = {
  className?: string;
  /** Hex or CSS color strings; blended in shader */
  colors?: string[]; // e.g., ['#007BFF', '#008080', '#00A0A0']
  /** Animation speed multiplier */
  speed?: number; // default 0.3
  /** Overall opacity of the background */
  opacity?: number; // default 0.5
  /** Enables dithering-like grain in color mix */
  grain?: number; // 0..1, default 0.15
};

// Minimal fragment shader inspired by 21st.dev shader components aesthetics:
// Smooth animated gradient with subtle noise and swirl.
const frag = `
precision highp float;
uniform vec2 u_res; // canvas resolution
uniform float u_time; // seconds
uniform vec4 u_c0; // color 0 rgba
uniform vec4 u_c1; // color 1 rgba
uniform vec4 u_c2; // color 2 rgba
uniform float u_grain; // 0..1

// Hash/Noise helpers
float hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p.x + p.y) * 43758.5453123);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy; // 0..1
  // center & aspect-correct
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;

  // Swirl field
  float r = length(p);
  float a = atan(p.y, p.x);
  float t = u_time * 0.2;
  a += 0.35 * sin(1.2 * r - t) + 0.15 * cos(2.0 * r + t);

  // Multi-color gradient mix
  float m0 = smoothstep(0.0, 0.9, 1.0 - r);
  float m1 = smoothstep(0.2, 1.1, abs(sin(a * 1.2 + t)));
  float m2 = 1.0 - m0;

  // Subtle moving noise
  float n = noise(uv * 3.5 + vec2(t * 0.6, -t * 0.4));
  float g = mix(0.0, n - 0.5, u_grain);

  vec3 col = u_c0.rgb * m0 + u_c1.rgb * m1 + u_c2.rgb * m2;
  col += g * 0.15; // grain

  // gentle vignette
  float vig = smoothstep(1.2, 0.2, r);
  col *= mix(0.9, 1.08, vig);

  gl_FragColor = vec4(col, (u_c0.a + u_c1.a + u_c2.a) / 3.0);
}
`;

const vert = `
attribute vec2 a_pos;
void main(){
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

export function ShaderBackground({ className, colors = ['#0b1a2b', '#007BFF', '#00A0A0'], speed = 0.3, opacity = 0.5, grain = 0.15 }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Compile shader helper
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const program = gl.createProgram()!;
    const vs = compile(gl.VERTEX_SHADER, vert);
    const fs = compile(gl.FRAGMENT_SHADER, frag);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);

    // Fullscreen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const verts = new Float32Array([
      -1, -1,
      3, -1,
      -1, 3,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const aPosLoc = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'u_res');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uC0 = gl.getUniformLocation(program, 'u_c0');
    const uC1 = gl.getUniformLocation(program, 'u_c1');
    const uC2 = gl.getUniformLocation(program, 'u_c2');
    const uGrain = gl.getUniformLocation(program, 'u_grain');

    const parseColor = (c: string) => {
      const ctx = document.createElement('canvas').getContext('2d')!;
      ctx.fillStyle = c;
      const d = ctx.fillStyle as string; // normalized color
      // expect like rgb(r, g, b)
      const m = d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (m) {
        return [parseInt(m[1]) / 255, parseInt(m[2]) / 255, parseInt(m[3]) / 255, 1];
      }
      // fallback to blue-ish
      return [0, 0.5, 1, 1];
    };

    const c0 = parseColor(colors[0] || '#0b1a2b');
    const c1 = parseColor(colors[1] || '#007BFF');
    const c2 = parseColor(colors[2] || '#00A0A0');

    gl.uniform4fv(uC0, new Float32Array(c0));
    gl.uniform4fv(uC1, new Float32Array(c1));
    gl.uniform4fv(uC2, new Float32Array(c2));
    gl.uniform1f(uGrain, Math.max(0, Math.min(1, grain)));

    const start = performance.now();
    const render = () => {
      const now = performance.now();
      const t = ((now - start) / 1000) * (speed || 0.3);

      // handle resize
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const needResize = cw !== width || ch !== height;
      if (needResize) {
        width = cw;
        height = ch;
        canvas.width = Math.max(1, Math.floor(width * dpr));
        canvas.height = Math.max(1, Math.floor(height * dpr));
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafRef.current = requestAnimationFrame(render);
    };
    gl.viewport(0, 0, canvas.width, canvas.height);
    render();

    const onVisibility = () => {
      if (document.hidden && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          render();
        });
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, [colors, speed, grain]);

  return (
    <div className={className} style={{ opacity }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"/>
    </div>
  );
}

export default ShaderBackground;
