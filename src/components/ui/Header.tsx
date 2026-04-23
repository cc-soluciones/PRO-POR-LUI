"use client";

import { useState, useEffect, useRef } from "react";
import MenuIcon from "@/assets/Menu";
import { nameCompany, navItem, whatsappLink } from "@/constants/general";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        const sections = navItem.map((item) =>
            document.querySelector(item.href)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: isMobile
                    ? "-80px 0px -50% 0px"
                    : "-100px 0px -30% 0px",
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });
        
        const handleScroll = () => {
            const scrollBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50;

            if (scrollBottom) {
                setActiveSection("#calls");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa] backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 w-full">
               
                <button
                    className="lg:hidden text-[#1758d1]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                >
                    <MenuIcon className="w-6 h-6" />
                </button>

                <div className="absolute w-80 left-1/2 -translate-x-1/2 text-center lg:static lg:translate-x-0 text-xl font-headline font-extrabold tracking-tighter text-[#000b20] uppercase">
                    <div className="flex items-center justify-center gap-2">
                        <img src="/about.webp" alt="2S" className="w-14 h-14" />
                        <span>{nameCompany}</span>
                    </div>
                </div>
                
                <div className="hidden lg:flex items-center gap-x-8">
                    {navItem.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`relative text-[#000b20] font-medium uppercase tracking-wider text-xs transition-all duration-300
                            ${
                                activeSection === item.href
                                    ? "text-[#795921]"
                                    : "hover:text-[#795921]"
                            }`}
                        >
                            {item.name}

                            {/* Línea activa */}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#795921] transition-all duration-300
                                ${
                                    activeSection === item.href
                                        ? "opacity-100 scale-x-100"
                                        : "opacity-0 scale-x-0"
                                }`}
                            />
                        </a>
                    ))}
                </div>
                
                <a
                    href={whatsappLink}
                    className="hidden lg:block bg-blue-light text-on-primary px-6 py-2.5 font-label font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300 active:scale-95"
                >
                    Consulta
                </a>
            </div>
           
            {isOpen && (
                <div
                    ref={menuRef}
                    className="lg:hidden flex flex-col items-center justify-center gap-6 py-6 bg-[#f8f9fa] shadow-sm"
                >
                    {navItem.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`relative text-[#000b20] font-medium uppercase tracking-wider text-sm
                            ${
                                activeSection === item.href
                                    ? "text-[#795921]"
                                    : ""
                            }`}
                        >
                            {item.name}

                            {/* Línea también en mobile */}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#795921] transition-all duration-300
                                ${
                                    activeSection === item.href
                                        ? "opacity-100 scale-x-100"
                                        : "opacity-0 scale-x-0"
                                }`}
                            />
                        </a>
                    ))}

                    <a
                        href={whatsappLink}
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-light text-on-primary px-6 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
                    >
                        Consulta
                    </a>
                </div>
            )}
        </nav>
    );
};