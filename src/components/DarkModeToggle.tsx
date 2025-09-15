"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <label className="switch relative inline-block w-[60px] h-[34px] cursor-pointer">
      <input
        id="input"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="opacity-0 w-0 h-0"
      />
      <div className="slider round absolute top-0 left-0 right-0 bottom-0 bg-[#2196f3] transition-all duration-400 rounded-[34px] overflow-hidden z-0">
        {/* Sun/Moon Toggle */}
        <div className={`sun-moon absolute content-[''] h-[26px] w-[26px] left-1 bottom-1 bg-yellow-400 transition-all duration-400 rounded-full ${theme === 'dark' ? 'transform translate-x-[26px] bg-white animate-rotate-center' : ''}`}>
          {/* Moon dots - only visible in dark mode */}
          <svg
            id="moon-dot-1"
            className={`moon-dot absolute left-[10px] top-[3px] w-[6px] h-[6px] z-[4] fill-gray-500 transition-opacity duration-400 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            id="moon-dot-2"
            className={`moon-dot absolute left-[2px] top-[10px] w-[10px] h-[10px] z-[4] fill-gray-500 transition-opacity duration-400 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            id="moon-dot-3"
            className={`moon-dot absolute left-[16px] top-[18px] w-[3px] h-[3px] z-[4] fill-gray-500 transition-opacity duration-400 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>

          {/* Light rays - only visible in light mode */}
          <svg
            id="light-ray-1"
            className={`light-ray absolute left-[-8px] top-[-8px] w-[43px] h-[43px] z-[-1] fill-white transition-opacity duration-400 ${theme === 'light' ? 'opacity-10' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            id="light-ray-2"
            className={`light-ray absolute left-[-50%] top-[-50%] w-[55px] h-[55px] z-[-1] fill-white transition-opacity duration-400 ${theme === 'light' ? 'opacity-10' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            id="light-ray-3"
            className={`light-ray absolute left-[-18px] top-[-18px] w-[60px] h-[60px] z-[-1] fill-white transition-opacity duration-400 ${theme === 'light' ? 'opacity-10' : 'opacity-0'}`}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        {/* Clouds */}
        <svg
          id="cloud-1"
          className="cloud-dark absolute left-[30px] top-[15px] w-[40px] fill-[#ccc] animate-cloud-move"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          id="cloud-2"
          className="cloud-dark absolute left-[44px] top-[10px] w-[20px] fill-[#ccc] animate-cloud-move animation-delay-1000"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          id="cloud-3"
          className="cloud-dark absolute left-[18px] top-[24px] w-[30px] fill-[#ccc] animate-cloud-move"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          id="cloud-4"
          className="cloud-light absolute left-[36px] top-[18px] w-[40px] fill-[#eee] animate-cloud-move"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          id="cloud-5"
          className="cloud-light absolute left-[48px] top-[14px] w-[20px] fill-[#eee] animate-cloud-move"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          id="cloud-6"
          className="cloud-light absolute left-[22px] top-[26px] w-[30px] fill-[#eee] animate-cloud-move"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>

        {/* Stars - only visible in dark mode */}
        <div className={`stars absolute transition-all duration-400 ${theme === 'dark' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[-32px] opacity-0'}`}>
          <svg
            id="star-1"
            className="star absolute w-[20px] top-[2px] left-[3px] fill-white animate-star-twinkle animation-delay-300"
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg
            id="star-2"
            className="star absolute w-[6px] top-[16px] left-[3px] fill-white animate-star-twinkle"
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg
            id="star-3"
            className="star absolute w-[12px] top-[20px] left-[10px] fill-white animate-star-twinkle animation-delay-600"
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg
            id="star-4"
            className="star absolute w-[18px] top-0 left-[18px] fill-white animate-star-twinkle animation-delay-1300"
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes cloud-move {
          0% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }

        @keyframes star-twinkle {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }

        @keyframes rotate-center {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-cloud-move {
          animation: cloud-move 6s infinite;
        }

        .animate-star-twinkle {
          animation: star-twinkle 2s infinite;
        }

        .animate-rotate-center {
          animation: rotate-center 0.6s ease-in-out both;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        input:checked + .slider {
          background-color: black;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }
      `}</style>
    </label>
  );
}