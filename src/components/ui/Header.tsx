import { nameCompany, navItem, whatsappLink } from "@/constants/general";

export const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 w-full">
                <div className="text-xl font-headline font-extrabold tracking-tighter text-[#000b20] uppercase">
                    {nameCompany}
                </div>
                <div className="hidden md:flex items-center space-gap-8 gap-x-8">
                    {navItem.map((item) => (
                        <a
                            key={item.href}
                            className="text-[#000b20] font-medium hover:text-[#795921] transition-all duration-300 font-label uppercase tracking-wider text-xs"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <a
                    className="bg-primary text-on-primary px-6 py-2.5 rounded-none font-label font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300 active:scale-95"
                    href={whatsappLink}
                >
                    Consulta
                </a>
            </div>
        </nav>
    );
};
