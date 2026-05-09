import React from 'react';
import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-zinc-950 pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial Atmospheric Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -right-1/4 w-full h-full bg-cyan-500/10 blur-[160px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-sky-500/5 blur-[160px] rounded-full" 
      />

      {/* Modern Data Flow / Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <pattern id="neural-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 0 100 L 200 100 M 100 0 L 100 200" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural-lines)" />
      </svg>

      {/* Floating Technological Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 2000,
            y: Math.random() * 1000 
          }}
          animate={{ 
            opacity: [0, 0.2, 0],
            y: [null, Math.random() * -300 - 100],
            x: [null, (Math.random() - 0.5) * 150]
          }}
          transition={{ 
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating Geometry / 3D feel */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, -20, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-64 h-64 border border-white/[0.03] rounded-[3rem] rotate-12 bg-gradient-to-br from-cyan-500/5 to-transparent blur-[1px]"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, 20, 0]
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[5%] w-96 h-96 border border-white/[0.02] rounded-full bg-gradient-to-tr from-sky-500/5 to-transparent blur-[2px]"
      />
    </div>
  );
}
