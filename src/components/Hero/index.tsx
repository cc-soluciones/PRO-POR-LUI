import { whatsappLink } from "@/constants/general";

interface Props {
    id: string;
}

export const Hero = ({ 
    id 
}: Props) => {
    return (
        <section id={id} className="relative pt-20 overflow-hidden bg-gradient-to-b from-[#0d89f5] to-[#2a80f0] min-h-[921px] flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    alt=""
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    data-alt="professional workspace with architectural drawings, financial charts, and a high-end fountain pen on a clean marble desk with gold accents"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3ZpaYTlXTWzYlrs0refnnT_zhUIRC8hBSZDuV_YBzAe2XvRo3uYGDS_CyWIVTMYgTje2PecpyhARE7OH6SsbgFUtRBl4lKdxtCbjcOk1V3qU7-wNojtkA-AW8XGgzbDdL__ppnwbiD03fvLAIObOHQ4eHOGswALPnvA66M2fBrIMlc7ZphDhA-389QhZ5X-wPy0Z4DZPpu0ssBOzeBQmp3eCuUYToYU_FTBU8ab_2-dZoEeCBBB2F_smukmELEC5KVv3ZwT4Npo1r"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent"></div>
            </div>
            <div className="container max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                    <span className="inline-block font-label text-secondary-fixed font-semibold uppercase tracking-[0.2em] mb-6">
                        Experiencia y visión estratégica
                    </span>
                    <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                        Consultoría de Negocios y Contabilidad para
                        Emprendedores y Empresas
                    </h1>
                    <div className="diagonal-accent mb-8"></div>
                    <p className="text-xl text-slate-300 max-w-2xl font-light mb-10 leading-relaxed">
                        Transformamos la complejidad financiera en claridad
                        estratégica. Especialistas en gestión de proyectos y
                        cumplimiento contable integral.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all"
                            href="#services"
                        >
                            Explorar Servicios
                        </a>
                        <a 
                            className="border border-white/30 text-white px-8 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
                            href={whatsappLink}
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


