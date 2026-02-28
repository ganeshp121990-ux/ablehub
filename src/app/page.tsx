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

      {/* 
        Scroll-Spine Container: 
        This parent is taller than 100vh (h-[200vh]) to give the user physical 
        scroll space. The actual <Hero /> inside it is 'sticky top-0'.
      */}
      <div className="relative w-full h-[200vh]">
        <Hero />
      </div>

      {/* 
        The Cinema Slide-Up:
        We pull the Trust section UP by 100vh so that it begins exactly at the bottom of the screen 
        when the user starts scrolling, gliding OVER the folding Hero in real-time.
      */}
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
