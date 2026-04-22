import CheckCircle from "@/assets/Check_circle";
import { services } from "@/constants/services";


export const Services = () => {
    return (
        <section id="services" className="w-full py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-8 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 items-center  border-r-4 border-secondary pr-8">
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
                                <span className="text-2xl text-secondary "><service.icon/></span>
                                <h3 className="text-2xl font-semibold text-on-surface">
                                    {service.title}
                                </h3>
                            </div>
                            <ul className="space-y-6 mb-10 ">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-secondary mt-1"><CheckCircle/></span>
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
                            
                            <button className="group mx-auto border border-gold/30 bg-white/5 backdrop-blur-sm text-secondary font-label font-bold uppercase tracking-widest text-sm flex items-center gap-2 px-6 py-3 hover:text-white hover:bg-blue-light transition-all cursor-pointer">
                                {service.cta}
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};