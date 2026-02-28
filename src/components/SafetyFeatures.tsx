"use client";

import React from "react";
import { motion, Easing } from "framer-motion";
import { ShieldCheck, UserCheck, Flag, Lock } from "lucide-react";

const EASE_ELITE: Easing = [0.16, 1, 0.3, 1];

const SAFETY_FEATURES = [
    {
        icon: UserCheck,
        title: "Verified Profiles",
        description: "Multi-step verification ensures genuine connections.",
    },
    {
        icon: ShieldCheck,
        title: "Human Moderation",
        description: "Active oversight by real teams, not just algorithms.",
    },
    {
        icon: Flag,
        title: "Report & Block Tools",
        description: "Immediate action controls to manage your experience.",
    },
    {
        icon: Lock,
        title: "Data Encryption",
        description: "End-to-end security protecting your personal information.",
    },
];

export default function SafetyFeatures() {
    return (
        <section className="relative w-full py-24 md:py-40 bg-[#020508] overflow-hidden flex flex-col items-center">

            <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-20 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: EASE_ELITE }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative group w-full rounded-[2.5rem] sm:rounded-[4rem] bg-[#060C10]/40 border border-white/[0.05] p-10 md:p-16 lg:p-24 overflow-hidden backdrop-blur-xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <div className="flex flex-col">
                            <span className="inline-flex items-center gap-2 py-1.5 px-3.5 w-max rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-[11px] uppercase tracking-[0.25em] font-semibold mb-8">
                                <ShieldCheck size={14} className="text-[#82C3D7]" />
                                Trust & Security
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white mb-8 leading-[1.1]">
                                Built for <br /><span className="text-white/40">Absolute Safety.</span>
                            </h2>
                            <p className="text-white/40 text-lg md:text-xl font-light leading-[1.8] max-w-lg">
                                We believe genuine connection requires peace of mind. AbleHub is governed by strict, proactive security measures to ensure a compassionate and moderated environment.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-[#82C3D7] blur-[120px] opacity-[0.03] rounded-full pointer-events-none"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                {SAFETY_FEATURES.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i, duration: 1, ease: EASE_ELITE }}
                                        viewport={{ once: true }}
                                        className="flex flex-col p-6 rounded-3xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.04] transition-colors duration-500"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[#020508] border border-white/[0.05] flex items-center justify-center mb-6 shadow-xl">
                                            <feature.icon size={20} className="text-[#82C3D7]/80" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-white font-medium tracking-tight mb-2 text-lg">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
