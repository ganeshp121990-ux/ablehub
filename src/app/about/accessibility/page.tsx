import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Keyboard, Ear, Eye, HandMetal, AlertCircle } from "lucide-react";

export default function AccessibilityPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-24 md:py-32">
                <div className="flex flex-col max-w-4xl">
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-[#E5D0A1]/80 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                        The Manifesto
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1]">
                        Zero Compromise <br className="hidden sm:block" />
                        <span className="text-white/40">Inclusive Engineering.</span>
                    </h1>
                    <p className="text-white/50 text-xl sm:text-2xl font-light leading-[1.8] max-w-3xl">
                        Accessibility at AbleHub is not an afterthought, a checkbox, or a legal requirement. It is the absolute foundational architecture of everything we build. We engineer to the extremes so the center holds everyone.
                    </p>
                </div>
            </section>

            {/* Detail Grid */}
            <section className="relative w-full border-t border-white/[0.05] bg-[#060C10]/40">
                <div className="absolute inset-0 bg-[#E5D0A1] blur-[150px] opacity-[0.02] pointer-events-none" />

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    <div className="flex flex-col border-l border-white/10 pl-8">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8">
                            <Eye size={20} className="text-white/60" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Adaptive Contrast & Typography</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            We strictly adhere to WCAG 2.1 AAA contrast ratios across the entire platform. Every font weight, color pairing, and background drop is mathematically proven to be legible under massive visual constraints. Text scales globally without breaking layout integrity.
                        </p>
                    </div>

                    <div className="flex flex-col border-l border-white/10 pl-8">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8">
                            <Keyboard size={20} className="text-white/60" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Keyboard-First Architecture</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            Every interactive element on AbleHub possesses a distinctly visible, high-contrast focus state. Our DOM structure is ordered logically, ensuring complex flows like profile creation or messaging can be traversed instantly and accurately via keystrokes alone.
                        </p>
                    </div>

                    <div className="flex flex-col border-l border-white/10 pl-8">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8">
                            <Ear size={20} className="text-white/60" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Native Screen Reader Logic</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            We don't just use ARIA labels; we design semantic HTML grids that inherently understand context. Our UI announces states, errors, and live updates cleanly, avoiding the noisy, redundant chatter typical of retrofitted accessibility tools.
                        </p>
                    </div>

                    <div className="flex flex-col border-l border-white/10 pl-8">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8">
                            <HandMetal size={20} className="text-white/60" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Motion & Vestibular Respect</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            While we pride ourselves on cinematic scroll mechanics, every animation instantly respects the user's `prefers-reduced-motion` OS level settings. Heavy parallax and scaling physics drop to beautiful, instant opacity fades automatically.
                        </p>
                    </div>

                </div>
            </section>

            {/* Support Contact Component */}
            <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-24">
                <div className="w-full rounded-[3rem] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
                    <div className="flex flex-col max-w-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <AlertCircle size={24} className="text-[#E5D0A1]" />
                            <h3 className="text-2xl font-semibold text-white">Found a Barrier?</h3>
                        </div>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            If an interaction feels broken, unclear, or inaccessible, it is a critical bug. Please alert our engineering team directly so we can tear it down and fix it.
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-8 py-4 rounded-full border border-white/20 bg-white/[0.05] text-white text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-500">
                        Report an Issue
                    </button>
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </main>
    );
}
