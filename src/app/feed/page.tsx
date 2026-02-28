import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeedPage() {
    return (
        <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white flex flex-col pt-32">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto py-48">
                <span className="inline-block py-1.5 px-4 w-max rounded-full bg-white/[0.03] border border-white/[0.05] text-white/50 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
                    Incoming Feature
                </span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Community Feed</h1>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                    The global feed is currently under development. Soon, you'll be able to explore authentic, accessible stories from around the world.
                </p>
            </div>
            <Footer />
        </main>
    );
}
