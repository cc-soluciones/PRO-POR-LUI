"use client";

import { useState, useEffect } from "react";
import MenuIcon from "@/assets/Menu";
import { nameCompany, navItem, whatsappLink } from "@/constants/general";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 w-full">
                               
                <button
                    className="lg:hidden text-[#1758d1]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuIcon className="w-6 h-6" />
                </button>

                <div className="absolute w-60 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-xl font-headline font-extrabold tracking-tighter text-[#000b20] uppercase">
                    {nameCompany}
                </div>

                <div className="hidden lg:flex items-center gap-x-8">
                    {navItem.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-[#000b20] font-medium hover:text-[#795921] transition-all duration-300 font-label uppercase tracking-wider text-xs"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                
                <a
                    href={whatsappLink}
                    className="hidden lg:block bg-primary text-on-primary px-6 py-2.5 font-label font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300 active:scale-95"
                >
                    Consulta
                </a>
            </div>
            
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center justify-center gap-6 py-6 bg-slate-50 shadow-md">
                    {navItem.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[#000b20] font-medium uppercase tracking-wider text-sm"
                        >
                            {item.name}
                        </a>
                    ))}
                    
                    <a
                        href={whatsappLink}
                        onClick={() => setIsOpen(false)}
                        className="bg-primary text-on-primary px-6 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
                    >
                        Consulta
                    </a>
                </div>
            )}
        </nav>
    );
};