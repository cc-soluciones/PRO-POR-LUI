"use client"

import { useState, useEffect } from "react";
import { about } from "@/constants/about";

export const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
            prev === about.images.length - 1 ? 0 : prev + 1
        );
    }, 4000); // cambia cada 4s

    return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 items-center border-r-4 border-secondary ">
                    <p className="text-on-surface-variant max-w-md md:mr-auto leading-relaxed italic font-extralight">
                        "{about.quote2}"
                    </p>
                    <div>
                        <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4 ">
                            {about.badge}
                        </p>

                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tigh">
                            {about.title}
                        </h2>
                    </div>                            
                </div>
                
                <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-12 items-center">                
                    <div className="relative shadow-md h-[400px] md:h-125">    
                        {about.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Consultoría"
                                className={`absolute w-full h-full object-cover object-[40%_20%] lg:object-[0%_12%] transition-opacity duration-700 ${
                                    index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}

                        <div className="absolute bottom-4 left-4 xl:-bottom-5 xl:left-14 bg-black text-white text-sm px-4 py-2 italic mt-10">
                            “{about.quote}”
                        </div>

                    </div>
                    
                    <div>
                        {about.description.map((text, index) => (
                            <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                                {text}
                            </p>
                        ))}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {about.cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`p-5 ${
                                        card.variant === "dark"
                                            ? "bg-[#013c8a] text-white"
                                            : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                    <h3 className="font-semibold mb-2 text-secondary">
                                        {card.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${
                                            card.variant === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
            
        </section>
    );
};