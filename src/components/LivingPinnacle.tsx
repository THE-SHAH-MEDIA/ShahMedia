"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function PinnacleGeometry() {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation animation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Main Pinnacle Structure - Wireframe */}
      <group>
        {/* Base cube wireframe */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial 
            color="#008080" 
            wireframe={true} 
            transparent={true}
            opacity={0.8}
          />
        </mesh>
        
        {/* Top pyramid wireframe */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[1.4, 2, 4]} />
          <meshBasicMaterial 
            color="#00A0A0" 
            wireframe={true} 
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        
        {/* Center connecting lines */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[0, 0, 0]} rotation={[0, (Math.PI / 2) * i, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
            <meshBasicMaterial 
              color={hovered ? "#007BFF" : "#008080"} 
              transparent={true}
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>
      
      {/* Glowing particles around the structure */}
      {hovered && [0, 1, 2, 3, 4, 5].map((i) => (
        <mesh 
          key={`particle-${i}`}
          position={[
            Math.sin((i * Math.PI) / 3) * 3,
            Math.cos((i * Math.PI) / 3) * 1.5,
            Math.cos((i * Math.PI) / 3) * 3
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial 
            color="#007BFF" 
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function LivingPinnacle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-gradient-to-b from-[#F1F1F1] to-white" />;
  }

  return (
    <div className="w-full h-full relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1F1F1] via-white to-[#F1F1F1] opacity-90" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 45,
        }}
        style={{ 
          background: 'transparent',
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color="#008080"
        />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Main 3D Object */}
        <PinnacleGeometry />
        
        {/* Controls for interaction */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Subtle overlay pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none pattern-dots-teal"
      />
    </div>
  );
}