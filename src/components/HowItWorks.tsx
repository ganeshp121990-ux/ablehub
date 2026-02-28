"use client";

import React from "react";
import { motion, Easing } from "framer-motion";
import { UserPlus, ShieldCheck, HeartHandshake } from "lucide-react";

// The same ultra-smooth easing used across the site
const EASE_ELITE: Easing = [0.16, 1, 0.3, 1];

const STEPS = [
    {
        icon: UserPlus,
        title: "Create Profile",
        description: "Set up a personalized space highlighting your interests, accessibility needs, and what makes you unique.",
        glow: "rgba(229, 208, 161, 0.15)", // Warm Amber
        delay: 0.1,
    },
    {
        icon: ShieldCheck,
        title: "Safe Matching",
        description: "Our community-first algorithm connects you with like-minded individuals in a fully moderated, secure environment.",
        glow: "rgba(130, 195, 215, 0.15)", // Calm Teal
        delay: 0.25,
    },
    {
        icon: HeartHandshake,
        title: "Connect With Confidence",
        description: "Build meaningful friendships, join local events, and communicate freely with absolute peace of mind.",
        glow: "rgba(255, 182, 193, 0.12)", // Soft Rose/Warmth
        delay: 0.4,
    },
];

export default function HowItWorks() {
    return (
        <section className="relative w-full py-24 md:py-40 bg-[#020508] overflow-hidden flex flex-col items-center">
            {/* Subtle Background Lighting */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#E5D0A1] blur-[180px] opacity-[0.02] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-20 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: EASE_ELITE }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/50 text-[11px] uppercase tracking-[0.3em] font-medium mb-6">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        How AbleHub Works
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        A thoughtfully designed, three-step journey to finding genuine connection in a space built entirely for you.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-12 w-full">

                    {/* Decorative Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent z-0 pointer-events-none" />

                    {STEPS.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index }: { step: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: step.delay, duration: 1.2, ease: EASE_ELITE }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative flex-1 flex flex-col items-center text-center p-8 sm:p-10 rounded-[2rem] bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-700 z-10"
        >
            {/* SpotLight Glow */}
            <div
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${step.glow}, transparent 60%)` }}
            />

            {/* Step Number Badge */}
            <div className="absolute -top-4 bg-[#060C10] border border-white/10 w-8 h-8 rounded-full flex items-center justify-center text-white/40 text-xs font-bold tracking-widest shadow-xl group-hover:text-white group-hover:border-white/20 transition-colors duration-500">
                0{index + 1}
            </div>

            {/* Icon Rig */}
            <div className="relative mb-8 mt-4">
                <div
                    className="absolute inset-0 blur-2xl rounded-full transition-opacity duration-700 opacity-20 group-hover:opacity-50"
                    style={{ backgroundColor: step.glow.replace('0.15', '1').replace('0.12', '1') }}
                />
                <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-[#060C10] border border-white/[0.05] group-hover:border-white/[0.15] group-hover:-translate-y-2 transition-all duration-700 ease-out shadow-2xl">
                    <step.icon size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                </div>
            </div>

            {/* Typography */}
            <h3 className="text-white text-xl font-semibold tracking-tight mb-4 relative z-10">
                {step.title}
            </h3>
            <p className="text-white/40 text-[0.95rem] leading-[1.8] font-light group-hover:text-white/60 transition-colors duration-700 relative z-10">
                {step.description}
            </p>

        </motion.div>
    );
}
