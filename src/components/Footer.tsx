"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
    Platform: [
        { name: "Home", href: "/" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Join the Community", href: "/join" },
    ],
    Safety: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Community Guidelines", href: "/legal/guidelines" },
        { name: "Accessibility", href: "/about/accessibility" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    Social: [
        { name: "Twitter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "LinkedIn", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#020508] border-t border-white/[0.05] overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

            <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 pt-20 md:pt-32 pb-10">

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20 md:mb-32">

                    <div className="col-span-2 lg:col-span-2 flex flex-col pr-8">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold tracking-tight text-white hover:text-white/80 transition-colors">
                                AbleHub.
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm">
                            The premier, accessibility-first community designed for authentic connections, profound friendships, and uncompromising safety.
                        </p>
                    </div>

                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div key={category} className="col-span-1 flex flex-col">
                            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group relative text-white/40 hover:text-white text-sm font-light transition-colors duration-300 inline-block"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/30 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/[0.05] gap-4">
                    <p className="text-white/30 text-xs tracking-wider">
                        &copy; {new Date().getFullYear()} AbleHub Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/legal/terms" className="text-white/30 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link href="/legal/privacy" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Shield</Link>
                        <Link href="/legal/cookies" className="text-white/30 hover:text-white text-xs transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
