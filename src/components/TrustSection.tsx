"use client";

import React from "react";
import {
  motion,
  useMotionValue,
} from "framer-motion";
import {
  ShieldCheck,
  Accessibility,
  Lock,
  Award,
} from "lucide-react";

const EASE_ELITE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type TrustItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  glow: string;
};

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: Award,
    title: "NDIS Registered",
    description:
      "Official provider standing for quality and reliable support.",
    glow: "rgba(229, 208, 161, 0.15)",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Moderated",
    description:
      "24/7 proactive moderation ensuring a secure, welcoming environment.",
    glow: "rgba(130, 195, 215, 0.15)",
  },
  {
    icon: Accessibility,
    title: "Accessibility-First",
    description:
      "Engineered from the ground up to exceed all WCAG 2.1 AA standards.",
    glow: "rgba(168, 214, 226, 0.15)",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description:
      "Enterprise-grade encryption keeping your personal data absolutely secure.",
    glow: "rgba(225, 229, 231, 0.1)",
  },
];

export default function TrustSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 bg-[#020508] overflow-hidden flex justify-center">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {TRUST_ITEMS.map((item, index) => (
            <TrustCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustCard({
  item,
  index,
}: {
  item: TrustItem;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } =
      currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = item.icon;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 1,
        ease: EASE_ELITE,
      }}
      viewport={{ once: true }}
      className="group relative p-8 sm:p-10 rounded-[2rem] bg-white/[0.01] border border-white/[0.05] overflow-hidden transition-all duration-700 hover:border-white/[0.15] hover:bg-white/[0.03]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative mb-10">
        <div
          className="absolute inset-0 blur-3xl rounded-full transition-opacity duration-700 opacity-20 group-hover:opacity-60"
          style={{ backgroundColor: item.glow }}
        />
        <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#060C10] border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-700">
          <Icon
            size={28}
            className="text-white/40 group-hover:text-white transition-colors duration-500"
            strokeWidth={1}
          />
        </div>
      </div>

      <h3 className="text-white text-[1.1rem] font-bold tracking-tight mb-4 uppercase">
        {item.title}
      </h3>

      <p className="text-white/40 text-[0.95rem] leading-relaxed font-light group-hover:text-white/70 transition-colors duration-700">
        {item.description}
      </p>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/20 transition-all duration-1000 group-hover:w-full" />
    </motion.div>
  );
}