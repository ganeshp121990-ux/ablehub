"use client";

import React from "react";
import { motion, Easing } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { ShieldCheck, Users, Heart, Globe } from "lucide-react";

const EASE_ELITE: Easing = [0.16, 1, 0.3, 1];

const VALUES = [
    {
        icon: Heart,
        title: "Empathy First",
        desc: "Every feature, guideline, and interaction is designed with profound understanding and respect for diverse experiences.",
    },
    {
        icon: Users,
        title: "Radical Inclusion",
        desc: "We build for the edge cases, ensuring no one is excluded from the human necessity of connection.",
    },
    {
        icon: ShieldCheck,
        title: "Uncompromising Safety",
        desc: "Our environment is actively protected to foster vulnerability without fear of harassment or exposure.",
    },
    {
        icon: Globe,
        title: "Global Accessibility",
        desc: "We adhere strictly to WCAG AAA standards, pushing the boundaries of what inclusive technology can feel like.",
    },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: EASE_ELITE }}
                    className="flex flex-col max-w-4xl"
                >
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-white/50 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                        Our Mission
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1]">
                        Connection is a <br className="hidden sm:block" />
                        <span className="text-white/40">fundamental right.</span>
                    </h1>
                    <p className="text-white/50 text-xl sm:text-2xl font-light leading-[1.8]">
                        AbleHub exists because the modern web left millions behind. We are building the first fully accessible, uncompromisingly safe space for people with disabilities to form genuine, lasting relationships.
                    </p>
                </motion.div>
            </section>

            <section className="relative w-full bg-[#060C10]/40 border-y border-white/[0.02] py-32 md:py-48 mt-12 overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#E5D0A1] blur-[200px] opacity-[0.03] rounded-full pointer-events-none" />

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: EASE_ELITE }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    >
                        <div className="flex flex-col">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                                Designing for the <br /> <span className="text-[#E5D0A1]">beautiful margins.</span>
                            </h2>
                            <p className="text-white/40 text-lg md:text-xl font-light leading-[1.8] mb-6">
                                Most platforms treat accessibility as a legal checklist. We treat it as the very foundation of our architecture. Every color contrast, focus state, and interaction is engineered to feel effortless for everyone.
                            </p>
                            <p className="text-white/40 text-lg md:text-xl font-light leading-[1.8]">
                                Our vision is a world where physical or cognitive differences do not dictate your ability to find your people.
                            </p>
                        </div>

                        <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-full border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent p-8 flex items-center justify-center">
                            <div className="absolute inset-x-0 h-[1px] bg-white/[0.05] top-1/2 -translate-y-1/2" />
                            <div className="absolute inset-y-0 w-[1px] bg-white/[0.05] left-1/2 -translate-x-1/2" />
                            <div className="w-1/2 h-1/2 rounded-full border border-white/10" />
                            <div className="absolute w-[15%] h-[15%] rounded-full bg-[#E5D0A1]/20 blur-md animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-32 md:py-48">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        The principles that guide every feature we ship and every community decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {VALUES.map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1, ease: EASE_ELITE }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group p-10 md:p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-700 flex flex-col"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#060C10] border border-white/[0.05] flex items-center justify-center mb-8 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500">
                                <val.icon size={24} className="text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                                {val.title}
                            </h3>
                            <p className="text-white/40 text-lg font-light leading-relaxed">
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </main>
    );
}
