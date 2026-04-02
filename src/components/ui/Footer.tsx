import { nameCompany, copyright, address, descriptionFooter, navItem } from "@/constants/general";

export const Footer = () => {
    return (
        <footer className="bg-[#000b20] pt-12 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                    <img
                        src="/logo.webp" 
                        className="w-full object-contain"
                    />
                    <div className="text-lg font-headline font-bold text-white uppercase tracking-tighter">
                        {nameCompany}
                    </div>
                    <p className="font-work-sans text-sm tracking-normal text-slate-300 leading-relaxed max-w-xs">
                        {descriptionFooter}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 justify-center items-center text-center">
                    <div className="space-y-4">
                        <h4 className="text-white font-headline font-bold text-sm uppercase">
                            Links
                        </h4>
                        <ul className="space-y-2">
                            {navItem.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-slate-400 hover:text-white transition-transform hover:translate-x-1 inline-block text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>                    
                </div>
                <div className="flex flex-col justify-between items-end">                    
                    <div className="text-[#ffddae] font-label text-xs uppercase tracking-widest mt-8">
                        {address}
                    </div>
                </div>
                
            </div>
            <p className="pt-6 mt-12 border-t max-w-7xl mx-auto border-white/10 py-6 text-slate-400 text-sm text-center  leading-loose">
                        {copyright}
            </p>
        </footer>
    );
};
