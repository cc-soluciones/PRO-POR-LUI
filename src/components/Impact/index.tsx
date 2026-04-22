"use client";

import { useState, useEffect, useRef } from "react";
import { impact } from "@/constants/impact";
import CheckIcon from "@/assets/Check_circle";

export const Impact = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<any>(null);

  const images = impact.carousel.images;

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [images.length]);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center border-l-4 border-secondary pl-8">
          
          <p className="text-on-surface-variant max-w-md leading-relaxed italic md:order-2">
            "{impact.quote}"
          </p>

          <div className="md:order-1">
            <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4">
              {impact.badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
              {impact.title}
            </h2>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="space-y-10">

            {/* GRUPOS + RESULTADOS 50/50 */}
            <div className="grid sm:grid-cols-2 gap-8">

              {/* Trabajamos con */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {impact.groups.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {impact.groups.text}
                </p>
              </div>

              {/* Resultados */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {impact.results.title}
                </h3>

                <ul className="space-y-3">
                  {impact.results.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-secondary mt-1">
                        <CheckIcon className="w-4 h-4" />
                      </span>
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* POR QUÉ */}
            <div className="bg-gray-100 p-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {impact.why.title}
              </h3>

              <ul className="space-y-3">
                {impact.why.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-secondary mt-1">
                      <CheckIcon className="w-4 h-4" />
                    </span>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROCESO */}
            <div className="bg-[#013c8a] text-white p-5">
              <h3 className="text-lg font-semibold mb-3">
                {impact.process.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {impact.process.text}
              </p>
            </div>

          </div>

          {/* CAROUSEL */}
          <div
            className="relative h-[400px] md:h-[500px] overflow-hidden shadow-md"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >

            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Caso de éxito"
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-2">
              {impact.carousel.overlay}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};