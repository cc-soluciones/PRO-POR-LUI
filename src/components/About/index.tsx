import { about } from "@/constants/about";

export const About = () => {
    return (
        <section id="about" className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 items-center ">
                    <p className="text-on-surface-variant max-w-md md:mr-auto leading-relaxed italic font-extralight">
                        {about.quote2}
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
                    <div className="relative">
                        <img
                            src="/about.webp"
                            alt="Consultoría"
                            className="w-full h-[400px] object-contain rounded-xl shadow-md"
                        />
                        <div className="absolute bottom-4 left-4 bg-black text-white text-sm px-4 py-2 rounded-md italic">
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
                                            ? "bg-gray-900 text-white"
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