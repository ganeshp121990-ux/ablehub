import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />
            <div className="flex-grow flex flex-col max-w-3xl mx-auto px-6 py-24 w-full">
                <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-white/50 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                    Cookie Controls
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Cookie Policy</h1>
                <div className="prose prose-invert prose-p:text-white/40 prose-h2:text-white prose-h2:font-medium">
                    <h2>Essential Cookies Only</h2>
                    <p>AbleHub operates strictly on a necessity-first basis. We only employ cookies required to authenticate your session and maintain accessibility preferences across pages.</p>
                    <h2>Third-Party Tracking</h2>
                    <p>To honor our privacy commitment and ensure a safe environment, we do not utilize invasive cross-site tracking cookies.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
