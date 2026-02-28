import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />

            <div className="flex-grow flex flex-col max-w-[900px] mx-auto px-6 sm:px-12 py-24 md:py-32 w-full">
                <div className="mb-20">
                    <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-[#E5D0A1]/70 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                        Legal Repository
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Terms of Service</h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">Last Updated: October 24, 2026</p>
                </div>

                <div className="relative border-l border-white/[0.05] pl-8 md:pl-12 lg:pl-16">
                    <div className="absolute top-0 left-[-1px] w-[2px] h-32 bg-gradient-to-b from-[#E5D0A1]/50 to-transparent shadow-[0_0_15px_rgba(229,208,161,0.3)]" />

                    <div className="prose prose-invert max-w-none prose-p:text-white/40 prose-p:text-lg md:prose-p:text-xl prose-p:leading-[2] prose-p:font-light prose-h2:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8">

                        <p>
                            By accessing, registering for, or continuing to use AbleHub, you mathematically establish a legally binding contract with our platform. Because we serve vulnerable communities, these terms are strictly enforced with zero tolerance for violations.
                        </p>

                        <h2>1. Account Integrity</h2>
                        <p>
                            You are solely responsible for maintaining the physical and cryptographic security of your account credentials. You agree that any activity originating from your authenticated session is legally assumed to be executed by you.
                        </p>

                        <h2>2. Prohibition of Harm</h2>
                        <p>
                            AbleHub maintains a monumental stance against harassment, hate speech, doxxing, or psychological damage. Utilizing our infrastructure to coordinate harm against any marginalized individual will instantly terminate your access and trigger relevant jurisdictional escalation.
                        </p>

                        <h2>3. Verification Protocols</h2>
                        <p>
                            We reserve the right to mandate biometric, algorithmic, or manual identity verification at any point during your lifecycle on the platform to prevent industrial-scale botting or malicious actor infiltration.
                        </p>

                        <h2>4. Service Availability</h2>
                        <p>
                            We engineer for 99.999% uptime, but we do not legally guarantee uninterrupted access. We reserve the right to suspend the service globally or individually for security patching, infrastructure upgrades, or compliance logic.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
