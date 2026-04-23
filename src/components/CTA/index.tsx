import CellPhone from "@/assets/CellPhone";
import Mail from "@/assets/Mail";
import { phone, email, whatsappLink } from "@/constants/general";

interface Props {
  id: string;
}

export const CTA = ({ id }: Props) => {
  return (
    <section id={id} className="relative py-24 bg-[#06589E] overflow-hidden">  
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-container opacity-40 clip-diagonal"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-8 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
          ¿Listo para escalar su organización?
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          Nuestra oficina está preparada para brindarle la asesoría estratégica
          que su negocio necesita hoy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">
          <div className="flex justify-center">
            <a 
              href={whatsappLink}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 flex text-white items-center justify-center bg-secondary rounded-lg group-hover:brightness-110 transition">
                <CellPhone/>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Llámanos o escríbenos
                </p>
                <p className="text-white font-semibold text-lg tracking-widest">
                  +{phone}
                </p>
              </div>
            </a>
          </div>
          
          {email && (
            <div className="flex justify-center border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 text-white flex items-center justify-center bg-secondary rounded-lg group-hover:brightness-110 transition">
                  <Mail/>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Correo electrónico
                  </p>
                  <p className="text-white font-semibold text-lg">
                    {email}
                  </p>
                </div>
              </a>
            </div>
          )}
        </div>
        
        <div className="mt-16 h-1 w-24 bg-secondary-fixed mx-auto"></div>
      </div>
    </section>
  );
};