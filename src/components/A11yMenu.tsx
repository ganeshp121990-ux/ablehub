"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useA11y } from "@/context/A11yContext";
import {
    Accessibility,
    X,
    ZoomIn,
    Contrast,
    Link2,
    PauseCircle,
    MousePointer2,
    AlignLeft,
    WholeWord,
    ImageOff,
    Sun
} from "lucide-react";

export default function A11yMenu() {
    const { state, toggleSetting, resetSettings, isOpen, setIsOpen } = useA11y();
    const menuRef = useRef<HTMLDivElement>(null);

    // Trap focus when menu is open
    useEffect(() => {
        if (isOpen && menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            firstElement?.focus();
        }
    }, [isOpen]);

    const toggleButtons = [
        { key: "largeText", label: "Increase Text", icon: ZoomIn },
        { key: "highContrast", label: "High Contrast", icon: Contrast },
        { key: "highlightLinks", label: "Highlight Links", icon: Link2 },
        { key: "pauseAnimations", label: "Pause Animations", icon: PauseCircle },
        { key: "largeCursor", label: "Large Cursor", icon: MousePointer2 },
        { key: "lineHeight", label: "Line Height", icon: AlignLeft },
        { key: "dyslexiaFont", label: "Dyslexia Font", icon: WholeWord },
        { key: "hideImages", label: "Hide Images", icon: ImageOff },
        { key: "lightMode", label: "Day Mode (Warm)", icon: Sun },
    ];

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Accessibility Menu"
                aria-expanded={isOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed z-[999] top-1/2 -translate-y-1/2 right-6 md:right-10 w-16 h-16 rounded-full bg-[#060C10]/90 backdrop-blur-xl border border-white/[0.08] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] text-white hover:text-[#82C3D7] hover:border-white/20 transition-all duration-300"
            >
                <Accessibility size={32} />
            </motion.button>

            {/* Expanded Glass Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed z-[1000] top-1/2 right-28 md:right-32 -translate-y-1/2 w-[calc(100vw-48px)] max-w-[340px] bg-[#020508]/95 backdrop-blur-3xl border border-white/[0.08] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Accessibility Settings"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/[0.05]">
                            <div className="flex items-center gap-3">
                                <Accessibility size={20} className="text-[#82C3D7]" />
                                <h2 className="text-white font-medium tracking-wide">Accessibility</h2>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Accessibility Menu"
                                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-white/50 hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Scrollable Toggles */}
                        <div className="p-4 flex flex-col gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {toggleButtons.map((btn) => {
                                const isActive = state[btn.key as keyof typeof state];
                                return (
                                    <button
                                        key={btn.key}
                                        onClick={() => toggleSetting(btn.key as keyof typeof state)}
                                        className="group relative w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.03] transition-colors overflow-hidden"
                                        aria-pressed={isActive}
                                    >
                                        <div className="relative z-10 flex items-center gap-4">
                                            <btn.icon size={20} className={`transition-colors ${isActive ? "text-[#82C3D7]" : "text-white/40 group-hover:text-white/70"}`} />
                                            <span className={`text-sm font-medium transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                                                {btn.label}
                                            </span>
                                        </div>
                                        {/* Switch UI */}
                                        <div className={`relative z-10 w-10 h-6 rounded-full transition-colors duration-300 ${isActive ? "bg-[#82C3D7]" : "bg-white/[0.1]"}`}>
                                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isActive ? "translate-x-4 shadow-sm" : "translate-x-0"}`} />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer / Reset */}
                        <div className="p-4 border-t border-white/[0.05] bg-white/[0.01]">
                            <button
                                onClick={resetSettings}
                                className="w-full py-3 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all"
                            >
                                Reset Settings
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
