import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidelinesPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            <div className="flex-grow flex flex-col max-w-[900px] mx-auto px-6 sm:px-12 py-24 md:py-32 w-full">
                {/* Document Header */}
                <div className="mb-20">
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-[#82C3D7]/70 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                        Operating Protocol
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Community Guidelines</h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">Last Updated: October 24, 2026</p>
                </div>

                {/* Editorial Body */}
                <div className="relative border-l border-white/[0.05] pl-8 md:pl-12 lg:pl-16">
                    {/* Glowing Reading Tracker Line */}
                    <div className="absolute top-0 left-[-1px] w-[2px] h-32 bg-gradient-to-b from-[#82C3D7]/50 to-transparent shadow-[0_0_15px_rgba(130,195,215,0.3)]" />

                    <div className="prose prose-invert max-w-none prose-p:text-white/40 prose-p:text-lg md:prose-p:text-xl prose-p:leading-[2] prose-p:font-light prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8">

                        <p>
                            AbleHub is not a public square. It is a carefully curated, heavily defended space dedicated to fostering authentic connections for marginalized communities. To participate in this ecosystem, you must adhere rigidly to the following protocols.
                        </p>

                        <h2>1. Radical Empathy</h2>
                        <p>
                            Assume positive intent, but rigorously defend personal boundaries. Disagreements must remain constructive. Any language that leverages identity, physical/mental ability, or socio-economic status as a weapon will result in immediate extraction from the network.
                        </p>

                        <h2>2. Total Authenticity</h2>
                        <p>
                            You must represent yourself as you truly are. Utilizing AI-generated personas, stolen photography, or deliberately misleading profile vectors is a critical violation of Trust & Safety protocols and triggers a permanent hardware ban.
                        </p>

                        <h2>3. Respecting Access Needs</h2>
                        <p>
                            Understand that communication speeds and styles vary wildly across our demographic. Do not harass, rush, or demean users for taking time to respond or utilizing alternative communication outputs (such as Text-to-Speech relays).
                        </p>

                        <h2>4. Unwelcome Solicitation</h2>
                        <p>
                            AbleHub is a connection platform, not a marketplace. Using the DM infrastructure to scrape contacts, sell services, or broadcast unsolicited financial opportunities will trigger an automated account lock and IP flag.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
