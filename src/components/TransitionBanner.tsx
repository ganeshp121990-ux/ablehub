"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const MARQUEE_TEXT = "• CONNECTION • ACCESSIBILITY • COMMUNITY • INCLUSION • SUPPORT • EMPOWERMENT ";

export default function TransitionBanner() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useSpring(
        useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]),
        { stiffness: 100, damping: 30, restDelta: 0.001 }
    );

    const lineOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

    const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[400px] bg-[#020508] flexflex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[200px] bg-[#E5D0A1] blur-[120px] opacity-[0.03] rounded-full pointer-events-none"></div>

            <div className="absolute top-1/2 -translate-y-1/2 w-full flex whitespace-nowrap overflow-hidden opacity-30 mix-blend-screen pointer-events-none">
                <motion.div
                    style={{ x: marqueeX }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/40 to-white/10 px-8"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
                        >
                            {MARQUEE_TEXT}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/[0.05] pointer-events-none">
                <motion.div
                    className="w-full bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    style={{
                        height: lineHeight,
                        opacity: lineOpacity
                    }}
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#060C10] to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020508] to-transparent pointer-events-none"></div>

        </section>
    );
}
