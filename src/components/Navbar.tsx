"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, Easing } from "framer-motion";
import { Users, Heart, Info, Mail, Home, Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LOGO_SOURCE = "/ablehub-transparent1.png";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Feed", icon: Users, href: "/feed" },
  { label: "Join", icon: Heart, href: "/join" },
  { label: "About", icon: Info, href: "/about" },
  { label: "How It Works", icon: Lightbulb, href: "/how-it-works" },
  { label: "Contact", icon: Mail, href: "/contact" },
];

const EASE_OS: Easing = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const { scrollY } = useScroll();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: EASE_OS }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
        ? "bg-[#060C10]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
        : "bg-transparent border-b border-transparent shadow-none"
        }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-24 h-24 flex items-center justify-between">

        <button
          onClick={() => router.push("/")}
          className="relative flex items-center group active:scale-95 transition-transform duration-500"
        >
          <Image
            src={LOGO_SOURCE}
            alt="AbleHub"
            width={400}
            height={120}
            className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
              ${isScrolled ? 'h-12 sm:h-14 lg:h-16' : 'h-18 sm:h-22 lg:h-28'} 
              opacity-90 group-hover:opacity-100
            `}
            priority
          />
        </button>

        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-2 text-white/50 hover:text-white transition-colors duration-500 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
            </a>
          ))}
        </div>

      </div>
    </motion.header>
  );
}