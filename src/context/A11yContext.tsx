"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface A11yState {
    largeText: boolean;
    highContrast: boolean;
    highlightLinks: boolean;
    pauseAnimations: boolean;
    largeCursor: boolean;
    lineHeight: boolean;
    dyslexiaFont: boolean;
    hideImages: boolean;
    lightMode: boolean;
}

const defaultState: A11yState = {
    largeText: false,
    highContrast: false,
    highlightLinks: false,
    pauseAnimations: false,
    largeCursor: false,
    lineHeight: false,
    dyslexiaFont: false,
    hideImages: false,
    lightMode: false,
};

interface A11yContextProps {
    state: A11yState;
    toggleSetting: (key: keyof A11yState) => void;
    resetSettings: () => void;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}

const A11yContext = createContext<A11yContextProps | undefined>(undefined);

export function A11yProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<A11yState>(defaultState);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        setIsMounted(true);
        try {
            const stored = localStorage.getItem("ablehub-a11y-prefs");
            if (stored) {
                setState(JSON.parse(stored));
            }
        } catch (e) {
            console.error("Failed to load a11y preferences", e);
        }
    }, []);

    // Save to localStorage & inject CSS classes on change
    useEffect(() => {
        if (!isMounted) return;

        localStorage.setItem("ablehub-a11y-prefs", JSON.stringify(state));

        const body = document.body;

        // Manage classes dynamically based on state
        state.largeText ? body.classList.add("a11y-large-text") : body.classList.remove("a11y-large-text");
        state.highContrast ? body.classList.add("a11y-high-contrast") : body.classList.remove("a11y-high-contrast");
        state.highlightLinks ? body.classList.add("a11y-highlight-links") : body.classList.remove("a11y-highlight-links");
        state.pauseAnimations ? body.classList.add("a11y-pause-animations") : body.classList.remove("a11y-pause-animations");
        state.largeCursor ? body.classList.add("a11y-large-cursor") : body.classList.remove("a11y-large-cursor");
        state.lineHeight ? body.classList.add("a11y-line-height") : body.classList.remove("a11y-line-height");
        state.dyslexiaFont ? body.classList.add("a11y-dyslexia") : body.classList.remove("a11y-dyslexia");
        state.hideImages ? body.classList.add("a11y-hide-images") : body.classList.remove("a11y-hide-images");
        state.lightMode ? body.classList.add("a11y-light-mode") : body.classList.remove("a11y-light-mode");

    }, [state, isMounted]);

    const toggleSetting = (key: keyof A11yState) => {
        setState((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const resetSettings = () => {
        setState(defaultState);
    };

    return (
        <A11yContext.Provider value={{ state, toggleSetting, resetSettings, isOpen, setIsOpen }}>
            {children}
        </A11yContext.Provider>
    );
}

export function useA11y() {
    const context = useContext(A11yContext);
    if (context === undefined) {
        throw new Error("useA11y must be used within an A11yProvider");
    }
    return context;
}
