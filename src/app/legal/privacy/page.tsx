import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            <div className="flex-grow flex flex-col max-w-[900px] mx-auto px-6 sm:px-12 py-24 md:py-32 w-full">
                {/* Document Header */}
                <div className="mb-20">
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-[#82C3D7]/70 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                        Legal Repository
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Privacy Policy</h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">Last Updated: October 24, 2026</p>
                </div>

                {/* Editorial Body */}
                <div className="relative border-l border-white/[0.05] pl-8 md:pl-12 lg:pl-16">
                    {/* Glowing Reading Tracker Line */}
                    <div className="absolute top-0 left-[-1px] w-[2px] h-32 bg-gradient-to-b from-[#82C3D7]/50 to-transparent shadow-[0_0_15px_rgba(130,195,215,0.3)]" />

                    <div className="prose prose-invert max-w-none prose-p:text-white/40 prose-p:text-lg md:prose-p:text-xl prose-p:leading-[2] prose-p:font-light prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8">

                        <p>
                            AbleHub operates on a foundational belief: privacy is absolute, not negotiable. We engineer our platform specifically to protect vulnerable populations, demanding an architecture built around data minimization and defensive encryption.
                        </p>

                        <h2>1. Data Collection & Minimization</h2>
                        <p>
                            We collect only the precise, minimal data points technically required to maintain platform integrity, verify your human identity, and render the core matchmaking algorithm. We do not farm behavioral meta-data for third-party monetization networks under any circumstances.
                        </p>

                        <h2>2. End-to-End Encryption Protcols</h2>
                        <p>
                            All direct message streams between verified users utilize modern end-to-end encryption schemas. Our engineering team, community moderators, and infrastructure providers do not hold the decryption keys necessary to read your private conversations.
                        </p>

                        <h2>3. The Right to Total Erasure</h2>
                        <p>
                            Your data remains your property. At any moment, utilizing the Account Actions dashboard, you may execute a "Total Erasure" command. This script systematically wipes your profile, logs, and associated media from all primary databases and localized CDN edges within milliseconds.
                        </p>

                        <h2>4. Zero Third-Party Advertising</h2>
                        <p>
                            We do not embed third-party advertising SDKs, cross-site tracking pixels, or algorithmic harvesting endpoints into the client application. Our financial model relies on direct premium subscriptions, entirely divorcing our revenue from the exploitation of user activity.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
