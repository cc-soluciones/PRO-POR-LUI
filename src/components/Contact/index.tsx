"use client";

import { useState } from "react";
import { phone } from "@/constants/general";

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors: any = {};

        if (!form.name.trim()) newErrors.name = "El nombre es requerido";
        if (!form.email.trim()) {
            newErrors.email = "El correo es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Correo inválido";
        }
        if (!form.message.trim()) newErrors.message = "El mensaje es requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        // limpia error al escribir
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!validate()) return;

        const text = `
Hola, soy ${form.name}.

Estoy interesado en sus servicios de asesoría.

Correo: ${form.email}

Detalle de la consulta:
${form.message}
        `;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    const inputStyle = (field: string) =>
        `border p-3 text-sm transition focus:outline-none ${
            errors[field]
                ? "border-red-500"
                : "border-gray-300 focus:border-secondary"
        } text-[#795921] placeholder:text-[#795921] placeholder:opacity-70`;

    return (
        <section id="contact" className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 items-center border-l-4 border-secondary pl-8">
                    <p className="text-on-surface-variant max-w-md md:mr-auto leading-relaxed italic font-extralight">
                        "Estamos disponibles para ayudarte a mejorar la gestión y crecimiento de tu empresa."
                    </p>

                    <div>
                        <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4">
                            Contacto
                        </p>

                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
                            Hablemos de tu proyecto
                        </h2>
                    </div>
                </div>                
                
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Completa el formulario y serás redirigido a WhatsApp para enviarnos tu consulta de forma rápida y directa.
                        </p>

                        <div className="p-5 bg-gray-100">
                            <h3 className="font-semibold mb-2 text-secondary">
                                Atención rápida
                            </h3>
                            <p className="text-sm text-gray-600">
                                Respondemos consultas en menos de 24 horas hábiles.
                            </p>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={form.name}
                                onChange={handleChange}
                                className={inputStyle("name") + " w-full"}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={form.email}
                                onChange={handleChange}
                                className={inputStyle("email") + " w-full"}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Escribe tu mensaje"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className={inputStyle("message") + " w-full resize-none"}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-light text-on-primary py-3 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-colors duration-300 active:scale-95 cursor-pointer"
                        >
                            Enviar por WhatsApp
                        </button>

                        <p className="text-xs text-gray-500 mt-2">
                            Serás redirigido a WhatsApp para completar tu consulta.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    );
};