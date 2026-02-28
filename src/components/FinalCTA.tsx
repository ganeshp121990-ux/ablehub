"use client";

import React from "react";
import { motion, Easing } from "framer-motion";

const EASE_ELITE: Easing = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
    return (
        <section className="relative w-full py-32 md:py-48 bg-[#020508] overflow-hidden flex flex-col items-center justify-center">

            {/* 
        The "Subtle Animated Gradient" Background 
        A mixture of deep blues and bronzes slowly rotating to create continuous, calm energy.
      */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen mix-blend-color-dodge">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[conic-gradient(from_0deg_at_50%_50%,#020508_0%,#1a2936_25%,#020508_50%,#2a2318_75%,#020508_100%)] blur-[100px] animate-[spin_20s_linear_infinite]" />
            </div>

            {/* Noise Texture to ground the gradient */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
            ></div>

            <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">

                {/* Entrance Animations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: EASE_ELITE }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center w-full"
                >
                    {/* Main Headline */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Bridging Community <br className="hidden sm:block" /> Together.
                    </h2>

                    {/* Short Emotional Trust Line */}
                    <p className="text-white/50 text-xl font-light max-w-2xl mb-12 sm:mb-16">
                        A secure, moderated space designed exclusively for you to connect, share, and thrive without hesitation.
                    </p>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">

                        {/* Primary Action: Join */}
                        <button className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl transition-all duration-700 hover:border-white/40 hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.98]">
                            {/* Spinning Edge Gradient on Hover */}
                            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            {/* Internal Glass Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <span className="relative z-10 flex items-center justify-center gap-3 text-white text-xs sm:text-[11px] uppercase tracking-[0.35em] font-semibold">
                                Join the Platform
                                <svg className="w-4 h-4 text-white/80 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>

                        {/* Secondary Action: Learn Safety */}
                        <button className="group relative w-full sm:w-auto px-10 py-4 rounded-full border border-transparent transition-all duration-700 hover:bg-white/[0.03] hover:border-white/10 active:scale-[0.98]">
                            <span className="relative z-10 text-white/60 group-hover:text-white text-xs sm:text-[11px] uppercase tracking-[0.35em] font-medium transition-colors duration-500 flex items-center gap-2">
                                Learn About Safety
                            </span>
                            {/* Underline fill effect */}
                            <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[40%]"></span>
                        </button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
