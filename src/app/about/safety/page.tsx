import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { ShieldAlert, Fingerprint, Radar, Scale } from "lucide-react";

export default function SafetyPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-24 md:py-32">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#1a2936] blur-[250px] opacity-[0.03] pointer-events-none rounded-full" />

                <div className="relative z-10 flex flex-col max-w-4xl border-l border-white/[0.05] pl-8">
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-[#82C3D7] text-[11px] uppercase tracking-[0.3em] font-medium mb-8 shadow-2xl">
                        Trust Architecture
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1]">
                        Uncompromising <br className="hidden sm:block" />
                        <span className="text-white/40">Safeguarding.</span>
                    </h1>
                    <p className="text-white/50 text-xl sm:text-2xl font-light leading-[1.8] max-w-3xl">
                        A community built for vulnerable populations requires military-grade protective infrastructure. Our Trust & Safety perimeter operates on a zero-tolerance policy for malicious actors, utilizing multi-point verification and 24/7 human oversight.
                    </p>
                </div>
            </section>

            <section className="relative w-full border-t border-white/[0.05] bg-[#060C10]/60">
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    <div className="flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-[#020508] border border-white/[0.05] shadow-2xl flex items-center justify-center mb-8">
                            <Fingerprint size={24} className="text-[#82C3D7]/80" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Multi-Point Verification Engine</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            Before a profile goes live, every identity is scrutinized through our proprietary verification sequence. We cross-reference biometric liveness, hardware logic, and contextual metadata to mathematically ensure you are connecting with a verified human immediately upon signup.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-[#020508] border border-white/[0.05] shadow-2xl flex items-center justify-center mb-8">
                            <Radar size={24} className="text-[#82C3D7]/80" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Active Human Monitoring</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            We do not rely solely on sluggish AI pattern recognition. The AbleHub community is actively monitored by specialized, trauma-informed human Trust & Safety teams operating 24/7/365 to instantly neutralize threats before they scale.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-[#020508] border border-white/[0.05] shadow-2xl flex items-center justify-center mb-8">
                            <ShieldAlert size={24} className="text-[#82C3D7]/80" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Zero-Tolerance Reporting Base</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            Our reporting mechanism isn't a buried support desk form—it's a critical platform utility built natively into every profile, message, and feed item. A reported threat instantly restricts the offending account within micro-seconds while human review is triggered.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-[#020508] border border-white/[0.05] shadow-2xl flex items-center justify-center mb-8">
                            <Scale size={24} className="text-[#82C3D7]/80" />
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Global Jurisdictional Safeguards</h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            We operate above regional compliance minimums. AbleHub utilizes encrypted, decentralized containment servers designed to legally and technically lock down malicious IPs across international borders immediately.
                        </p>
                    </div>

                </div>
            </section>

            <section className="relative w-full border-t border-white/[0.05] py-24 px-6 md:px-20 text-center flex flex-col items-center">
                <h3 className="text-2xl font-light text-white/50 mb-6 max-w-2xl">
                    Platform integrity must be absolute. By continuing, you agree strictly to our uncompromising code of conduct.
                </h3>
                <button className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white/80 transition-all duration-500">
                    Acknowledge Protocol
                </button>
            </section>

            <FinalCTA />
            <Footer />
        </main>
    );
}
