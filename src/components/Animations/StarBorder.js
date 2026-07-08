'use client';
import React from 'react';

export default function StarBorder({ className = '', children, color = '#a855f7', speed = '6s', ...rest }) {
  return (
    <button
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }}
      />
      <div className="relative z-1 bg-gradient-to-b from-indigo-950 to-gray-900 border border-purple-500/30 text-white text-center text-base py-3 px-6 rounded-full">
        {children}
      </div>
    </button>
  );
}