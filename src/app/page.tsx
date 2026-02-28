import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import SafetyFeatures from "@/components/SafetyFeatures";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020508] selection:bg-white/20 selection:text-white">
      <Navbar />

      <div className="relative w-full h-[200vh]">
        <Hero />
      </div>

      <div className="relative z-20 -mt-[100vh] bg-[#020508] shadow-[0_-40px_100px_rgba(2,5,8,1)] rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-white/[0.05]">
        <TrustSection />
        <HowItWorks />
        <SafetyFeatures />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
