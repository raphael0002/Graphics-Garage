"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    // Set mounted to true after the component mounts
    useEffect(() => {
        setMounted(true);
    }, []);

    // Render nothing or a fallback until mounted
    if (!mounted) {
        return null; // Or a fallback UI, e.g., <div className="h-screen bg-gray-200 animate-pulse"></div>
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}