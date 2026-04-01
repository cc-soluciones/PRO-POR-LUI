import { calls } from "@/constants/calls";
import Image from "next/image";

interface Props{
    id:string;
}

export const Calls = ({

}: Props) => {

    return (
        <section id="calls" className="w-full py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-8">

                <div className="text-center mb-20">
                    <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4">
                        {calls.badge}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface">
                        {calls.title}
                    </h2>
                    <div className="w-20 h-[2px] bg-secondary mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {calls.items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        className="group bg-surface p-10 border border-outline-variant hover:shadow-lg transition-all"
                    >                            
                        <div className="mb-6 flex justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={60}
                                className="object-contain opacity-80 group-hover:opacity-100 transition"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-on-surface mb-4 text-center">
                            {item.title}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed text-center">
                            {item.description}
                        </p>

                    </a>
                ))}
                </div>
            </div>
        </section>
    );
};