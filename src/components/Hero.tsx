"use client";

import React, { useRef } from 'react';
import { motion, Easing, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

const EASE_OS: Easing = [0.22, 1, 0.36, 1];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);

  const rotateX = useTransform(scrollY, [0, 800], [0, 20]);

  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  const videoBrightness = useTransform(scrollY, [0, 800], [1, 1.4]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: EASE_OS }
    }
  };

  return (
    <section ref={heroRef} className="sticky top-0 w-full h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#020508]">

      <motion.div
        style={{
          scale,
          opacity,
          rotateX,
          transformOrigin: "bottom center",
          transformPerspective: 2000
        }}
        className="relative w-full h-full flex items-center justify-center will-change-transform"
      >
        <div className="absolute inset-0 z-0 bg-[#060C10]">
          <motion.video
            style={{ filter: useTransform(videoBrightness, v => `brightness(${v})`) }}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-screen scale-105 animate-[slow-pan_25s_infinite_alternate_ease-in-out]"
          >
            <source src="/backgourndvideo.mp4" type="video/mp4" />
          </motion.video>

          <div className="absolute inset-0 bg-gradient-to-br from-[#020508]/95 via-[#060C10]/80 to-[#03070A]/95 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#060C10] via-[#060C10]/80 to-transparent"></div>

          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[#91C3D4] blur-[160px] opacity-[0.06] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E5D0A1] blur-[150px] opacity-[0.03] rounded-full pointer-events-none mix-blend-screen"></div>

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-12 md:mt-0">
          <motion.div
            className="flex flex-col items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >

            <motion.div variants={itemVariants} className="mb-10 sm:mb-14">
              <div className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:animate-[glare_2s_ease-out_infinite]"></div>

                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5D0A1] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E5D0A1]"></span>
                </span>
                <span className="relative z-10 text-[10px] sm:text-[11px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#FFFFFF]/70">
                  Bridging Community Together
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[15vw] sm:text-[13vw] md:text-[10rem] lg:text-[12rem] font-bold tracking-[-0.05em] leading-[0.85] text-[#FFFFFF] pb-2"
            >
              AbleHub
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 md:mt-12 max-w-[85%] sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-[1.2rem] leading-[1.8] text-[#FFFFFF]/50 font-light"
            >
              A thoughtfully designed, accessibility-first community where people with disabilities build meaningful friendships and connect with absolute confidence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
            >
              <button
                onClick={() => router.push('/join')}
                className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl transition-all duration-700 hover:border-white/40 hover:bg-white/[0.08] hover:scale-[1.02]"
              >
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <span className="relative z-10 flex items-center justify-center gap-4 text-[#FFFFFF] text-[11px] uppercase tracking-[0.35em] font-semibold">
                  Join the Platform
                  <svg className="w-4 h-4 text-[#FFFFFF]/80 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => router.push('/about')}
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full border border-transparent transition-all duration-700 hover:bg-white/[0.03] hover:border-white/10"
              >
                <span className="relative z-10 text-[#FFFFFF]/60 group-hover:text-[#FFFFFF] text-[11px] uppercase tracking-[0.35em] font-medium transition-colors duration-500">
                  Explore Vision
                </span>
                <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[40%]"></span>
              </button>

            </motion.div>
          </motion.div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slow-pan {
            from { transform: scale(1.05) translate(0, 0); }
            to { transform: scale(1.1) translate(-1.5%, 1.5%); }
          }
          @keyframes glare {
            0% { transform: translateX(-100%) skewX(-15deg); }
            50%, 100% { transform: translateX(200%) skewX(-15deg); }
          }
        `}} />
      </motion.div>
    </section >
  );
}