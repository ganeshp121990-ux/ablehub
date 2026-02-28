"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ShieldCheck, Accessibility, Lock, Award } from "lucide-react";

const EASE_ELITE = [0.16, 1, 0.3, 1];

const TRUST_ITEMS = [
    { icon: Award, title: "NDIS Registered", description: "Official provider standing for quality and reliable support.", glow: "rgba(229, 208, 161, 0.15)" },
    { icon: ShieldCheck, title: "Safe & Moderated", description: "24/7 proactive moderation ensuring a secure, welcoming environment.", glow: "rgba(130, 195, 215, 0.15)" },
    { icon: Accessibility, title: "Accessibility-First", description: "Engineered from the ground up to exceed all WCAG 2.1 AA standards.", glow: "rgba(168, 214, 226, 0.15)" },
    { icon: Lock, title: "Privacy Protected", description: "Enterprise-grade encryption keeping your personal data absolutely secure.", glow: "rgba(225, 229, 231, 0.1)" },
];

export default function TrustSection() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-[#020508] overflow-hidden flex justify-center">
            {/* The Cinematic "Vanta" Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                {/* Center "Aura" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#0A1A22] blur-[150px] rounded-full opacity-30" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-20 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: EASE_ELITE }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {TRUST_ITEMS.map((item, index) => (
                        <TrustCard key={index} item={item} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TrustCard({ item, index }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 1, ease: EASE_ELITE }}
            viewport={{ once: true }}
            className="group relative p-8 sm:p-10 rounded-[2rem] bg-white/[0.01] border border-white/[0.05] overflow-hidden transition-all duration-700 hover:border-white/[0.15] hover:bg-white/[0.03]"
        >
            {/* SpotLight Effect: The "Flashlight" follow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Icon Rig: Floating Physics */}
            <div className="relative mb-10">
                <div
                    className="absolute inset-0 blur-3xl rounded-full transition-opacity duration-700 opacity-20 group-hover:opacity-60"
                    style={{ backgroundColor: item.glow }}
                />
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#060C10] border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <item.icon size={28} className="text-white/40 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                </div>
            </div>

            {/* Typography: Elite Spacing */}
            <h3 className="text-white text-[1.1rem] font-bold tracking-tight mb-4 uppercase">
                {item.title}
            </h3>
            <p className="text-white/40 text-[0.95rem] leading-relaxed font-light group-hover:text-white/70 transition-colors duration-700">
                {item.description}
            </p>

            {/* Kinetic Bottom Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/20 transition-all duration-1000 group-hover:w-full" />
        </motion.div>
    );
}