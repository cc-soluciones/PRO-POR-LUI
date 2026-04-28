"use client"

import CheckCircle from "@/assets/Check_circle";
import { pricingImages, services } from "@/constants/services";
import { useState, useEffect } from "react";

export const Services = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);
    
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <section id="services" className="w-full py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-8 ">
               
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 items-center border-r-4 border-secondary pr-8">
                    <div>
                        <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4">
                            {services.badge}
                        </p>

                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
                            {services.title}
                        </h2>
                    </div>

                    <p className="text-on-surface-variant max-w-md md:ml-auto leading-relaxed italic">
                        "{services.description}"
                    </p>
                </div>
               
                <div className="grid md:grid-cols-2 border border-outline-variant bg-surface-container-lowest">
                    {services.items.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between p-10 border-b md:border-b-0 md:border-r border-outline-variant last:border-r-0"
                        >
                            <div className="flex items-center justify-center gap-3 mb-8 text-center">
                                <span className="text-2xl text-secondary">
                                    <service.icon />
                                </span>
                                <h3 className="text-2xl font-semibold text-on-surface">
                                    {service.title}
                                </h3>
                            </div>

                            <ul className="space-y-6 mb-10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-secondary mt-1">
                                            <CheckCircle />
                                        </span>
                                        <div>
                                            <p className="font-semibold text-on-surface">
                                                {feature.title}
                                            </p>
                                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="group mx-auto border border-gold/30 bg-white/5 backdrop-blur-sm text-secondary font-label font-bold uppercase tracking-widest text-sm flex items-center gap-2 px-6 py-3 hover:text-white hover:bg-blue-light transition-all cursor-pointer"
                            >
                                {service.cta}
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
                
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-on-surface">
                            Planes y Servicios
                        </h3>
                        <p className="text-on-surface-variant mt-2">
                            Soluciones claras, precios transparentes
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pricingImages.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImage(img)}
                                className="group cursor-pointer rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-low shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <img
                                    src={img}
                                    alt={`Plan ${i + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />

                                <div className="p-6 flex justify-center">
                                    <span className="text-secondary font-label font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                        Ver detalle →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full animate-[fadeIn_.3s_ease]"
                        onClick={(e) => e.stopPropagation()}
                    >                        
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white text-3xl font-bold hover:scale-110 transition cursor-pointer"
                        >
                            ✕
                        </button>
                        
                        <img
                            src={selectedImage}
                            alt="Plan seleccionado"
                            className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        />
                        
                        <div className="mt-6 flex justify-center">
                            <a
                                href="#contact"
                                onClick={() => setSelectedImage(null)}
                                className="bg-secondary text-white font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-secondary/80 transition"
                            >
                                Consultar este servicio
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};