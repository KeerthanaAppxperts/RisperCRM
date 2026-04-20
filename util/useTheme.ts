"use client";
import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("light");
    const [isMounted, setIsMounted] = useState(false);

    const applyTheme = useCallback((newTheme: Theme) => {
        if (typeof window === "undefined") return;

        try {
            document.documentElement.setAttribute("data-bs-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        } catch (error) {
            console.warn("Error applying theme:", error);
        }
    }, []);

    useEffect(() => {
        const getInitialTheme = (): Theme => {
            if (typeof window === "undefined") return "light";

            try {
                const appliedTheme = document.documentElement.getAttribute("data-bs-theme") as Theme;
                if (appliedTheme && (appliedTheme === "light" || appliedTheme === "dark")) {
                    return appliedTheme;
                }

                const storedTheme = localStorage.getItem("theme") as Theme;
                if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
                    return storedTheme;
                }

                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                return prefersDark ? "dark" : "light";
            } catch (error) {
                console.warn("Error reading theme preference:", error);
                return "light";
            }
        };

        queueMicrotask(() => {
            setIsMounted(true);
            const initialTheme = getInitialTheme();
            setTheme(initialTheme);
            applyTheme(initialTheme);
        });
    }, [applyTheme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    const setThemeMode = (newTheme: Theme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return {
        theme,
        isMounted,
        toggleTheme,
        setThemeMode,
        isDark: theme === "dark",
        isLight: theme === "light",
    };
};
