export const Banner = () => {
    return (
        <section className="bg-surface-container py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-l-4 border-secondary pl-8">
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary max-w-2xl leading-tight">
                        Impulsando Ideas, Gestionando Proyectos,{" "}
                        <span className="text-secondary">
                            Haciendo Crecer tu Negocio
                        </span>
                    </h2>
                    <div className="flex gap-12 items-center">
                        <div className="text-center">
                            <span className="block text-4xl font-headline font-extrabold text-primary">
                                15+
                            </span>
                            <span className="text-xs font-label uppercase tracking-tighter text-slate-500">
                                Años de Experiencia
                            </span>
                        </div>
                        <div className="text-center">
                            <span className="block text-4xl font-headline font-extrabold text-primary">
                                500+
                            </span>
                            <span className="text-xs font-label uppercase tracking-tighter text-slate-500">
                                Proyectos Visados
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
