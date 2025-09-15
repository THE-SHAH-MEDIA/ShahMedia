'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Always call hooks at the top level
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  // Only show the component after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render interactive toggle until mounted
  if (!mounted) {
    return (
      <div className="dark-mode-toggle">
        <label className="switch">
          <input
            type="checkbox"
            disabled
            className="toggle-input"
            aria-label="Dark mode toggle (loading)"
          />
          <span className="slider round">
            <div className="sun-moon"></div>
          </span>
        </label>
      </div>
    );
  }

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input
          id="theme-toggle"
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="toggle-input"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        />
        <span className="slider round">
          <div className="sun-moon">
            {/* Sun rays */}
            <svg
              id="light-ray-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              id="light-ray-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              id="light-ray-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Moon dots */}
            <div id="moon-dot-1" className="moon-dot"></div>
            <div id="moon-dot-2" className="moon-dot"></div>
            <div id="moon-dot-3" className="moon-dot"></div>
          </div>

          {/* Stars */}
          <div className="stars">
            <svg
              id="star-1"
              className="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              id="star-2"
              className="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              id="star-3"
              className="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              id="star-4"
              className="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Clouds */}
          <svg
            id="cloud-1"
            className="cloud-light"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg
            id="cloud-2"
            className="cloud-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg
            id="cloud-3"
            className="cloud-light"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg
            id="cloud-4"
            className="cloud-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg
            id="cloud-5"
            className="cloud-light"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg
            id="cloud-6"
            className="cloud-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </span>
      </label>

      <style jsx>{`
        /* Dark Mode Toggle - Adapted from uiverse.io with Shah Media colors */
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .switch .toggle-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-focus-blue); /* Shah Media Blue */
          -webkit-transition: 0.4s;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }

        .sun-moon {
          position: absolute;
          content: '';
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: var(--color-ascendant-teal-start); /* Shah Media Teal */
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .toggle-input:checked + .slider {
          background-color: var(--color-foundation-charcoal); /* Shah Media Charcoal */
        }

        .toggle-input:focus + .slider {
          box-shadow: 0 0 1px var(--color-focus-blue);
        }

        .toggle-input:checked + .slider .sun-moon {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
          background-color: var(--color-canvas-white);
          -webkit-animation: rotate-center 0.6s ease-in-out both;
          animation: rotate-center 0.6s ease-in-out both;
        }

        .moon-dot {
          opacity: 0;
          transition: 0.4s;
          background-color: var(--color-accent-gray);
          border-radius: 50%;
        }

        .toggle-input:checked + .slider .sun-moon .moon-dot {
          opacity: 1;
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round .sun-moon {
          border-radius: 50%;
        }

        #moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }

        #moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }

        #moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }

        #light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: var(--color-canvas-white);
          opacity: 0.1;
        }

        #light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: var(--color-canvas-white);
          opacity: 0.1;
        }

        #light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: var(--color-canvas-white);
          opacity: 10%;
        }

        .cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }

        .cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }

        #cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }

        #cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }

        #cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }

        #cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }

        #cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }

        #cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }

        @keyframes cloud-move {
          0% {
            transform: translateX(0px);
          }
          40% {
            transform: translateX(4px);
          }
          80% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        .stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }

        .star {
          fill: var(--color-canvas-white);
          position: absolute;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          animation-name: star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .toggle-input:checked + .slider .stars {
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          transform: translateY(0);
          opacity: 1;
        }

        #star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
          animation-delay: 0.3s;
        }

        #star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }

        #star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
          animation-delay: 0.6s;
        }

        #star-4 {
          width: 18px;
          top: 0px;
          left: 18px;
          animation-delay: 1.3s;
        }

        @keyframes star-twinkle {
          0% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.2);
          }
          80% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes rotate-center {
          0% {
            transform: translateX(26px) rotate(0);
          }
          100% {
            transform: translateX(26px) rotate(360deg);
          }
        }

        /* Glass morphism effect to match header */
        .dark-mode-toggle {
          padding: 8px;
          background: rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(10px); /* Safari fallback */
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .dark-mode-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};

export default DarkModeToggle;