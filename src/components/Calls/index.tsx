import { calls } from "@/constants/calls";
import Image from "next/image";

interface Props {
  id: string;
}

export const Calls = ({
    id
}: Props) => {
  return (
    <section id={id} className="w-full py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">            
            <div className="text-center mb-20">
                <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4">
                    {calls.badge}
                </p>

                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface">
                    {calls.title}
                </h2>

                <p className="max-w-2xl mx-auto mt-6 text-on-surface-variant text-lg">
                    {calls.description}
                </p>
                <div className="w-20 h-[2px] bg-secondary mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {calls.items.map((item, index) => (
                    <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="group flex flex-col h-full bg-surface border border-outline-variant rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                    <div className="relative h-64 w-full bg-white overflow-hidden rounded-t-xl">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain group-hover:scale-105 transition-all duration-300"
                        />
                    </div>

                    <div className="w-16 h-[2px] bg-secondary mx-auto my-4"></div>

                    <div className="flex flex-col flex-grow text-center px-4 pb-6">
                        <h3 className="text-lg font-semibold text-on-surface mb-3">
                        {item.title}
                        </h3>

                        <p className="text-sm text-on-surface-variant leading-relaxed flex-grow line-clamp-3">
                        {item.description}
                        </p>
                    </div>
                    </a>
                ))}
            </div>
            
            <div className="mt-28 text-center">

                <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">
                    {calls.calendar.title}
                </h3>

                <p className="text-on-surface-variant max-w-3xl mx-auto mb-14">
                    {calls.calendar.description}
                </p>

                <div className="flex flex-col gap-16 items-center">
                    {calls.calendar.images.map((img, i) => (
                        <a
                            key={i}
                            href={calls.calendar.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-7xl block"
                        >
                            <Image
                            src={img.src}
                            alt={img.alt}                            
                            width={1400}
                            height={800}
                            className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.01] transition duration-300 cursor-pointe"
                            />
                        </a>
                        ))}
                </div>
                
                <div className="text-center mt-16">
                    <a
                    href={calls.cta.link}
                    className="inline-block bg-blue-light  text-white px-8 py-3 font-semibold hover:opacity-90 transition"
                    >
                    {calls.cta.text}
                    </a>
                </div>

            </div>

        </div>
    </section>
  );
};