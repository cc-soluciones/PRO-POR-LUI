"use client";

import ArrowUpIcon from "@/assets/ArrowUpIcon";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // aparece después de ~1 pantalla
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        const element = document.getElementById("home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="group fixed bottom-6 right-6 z-50 bg-blue-light text-white p-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
        >
            <ArrowUpIcon className="w-5 h-5 group-hover:-translate-y-0.5 transition" />
        </button>
    );
};