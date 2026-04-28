import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react"; // 👈 cambio aquí
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "2S Gestión Empresa | Asesoría y Gestión Empresarial en Chile",
    description:
        "Ayudamos a empresas y emprendedores a optimizar su gestión, procesos y crecimiento. Servicios profesionales de asesoría empresarial en Chile.",
    keywords: [
        "gestión empresarial",
        "asesoría empresas Chile",
        "optimización procesos",
        "consultoría negocios",
        "emprendimiento Chile",
    ],
    
    icons: {
        icon: [
            { url: "/favicon.svg" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        apple: "/apple-touch-icon.png",
    },
    
    manifest: "/site.webmanifest",
    
    openGraph: {
        title: "2S Gestión Empresa",
        description:
            "Asesoría en gestión empresarial y financiamiento para pymes en Chile",
        url: "https://2sgestionempresa.cl",
        siteName: "2SGestionEmpresa",
        locale: "es_CL",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="es"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                <main>{children}</main>
                <ScrollToTop />
                <Footer />                
                <Analytics />
            </body>
        </html>
    );
}