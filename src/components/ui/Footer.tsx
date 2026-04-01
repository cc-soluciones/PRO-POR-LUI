import { nameCompany, copyright, address, descriptionFooter } from "@/constants/general";

export const Footer = () => {
    return (
        <footer className="bg-[#000b20] py-12 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                    <div className="text-lg font-headline font-bold text-white uppercase tracking-tighter">
                        {nameCompany}
                    </div>
                    <p className="font-work-sans text-sm tracking-normal text-slate-300 leading-relaxed max-w-xs">
                        {descriptionFooter}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {/* <div className="space-y-4">
                        <h4 className="text-white font-headline font-bold text-sm uppercase">
                            Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    className="text-slate-400 hover:text-white transition-transform hover:translate-x-1 inline-block text-sm"
                                    href="#services"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-slate-400 hover:text-white transition-transform hover:translate-x-1 inline-block text-sm"
                                    href="#about"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <div className="space-y-4">
                        <h4 className="text-white font-headline font-bold text-sm uppercase">
                            Contacto
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    className="text-slate-400 hover:text-white transition-transform hover:translate-x-1 inline-block text-sm"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-slate-400 hover:text-white transition-transform hover:translate-x-1 inline-block text-sm"
                                    href="#"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="flex flex-col justify-between items-end">
                    <p className="text-slate-400 text-sm text-right leading-loose">
                        {copyright}
                    </p>
                    <div className="text-[#ffddae] font-label text-xs uppercase tracking-widest mt-8">
                        {address}
                    </div>
                </div>
            </div>
        </footer>
    );
};
