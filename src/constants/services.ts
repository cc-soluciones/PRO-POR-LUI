import Bank from "@/assets/Bank";
import Finance from "@/assets/Finance";
export const services = {
    badge: "Nuestras soluciones",

    title: "Áreas de Especialización",

    description:
        "Ofrecemos un enfoque holístico que integra la administración estratégica con la precisión contable.",

    items: [
        {
            title: "Consultoría de Negocios",
            icon: Finance,
            features: [
                {
                    title: "Fondos Concursables",
                    text: "Acompañamiento completo desde el diagnóstico hasta la adjudicación de fondos estatales.",
                },
                {
                    title: "Gestión y Formulación de Proyectos",
                    text: "Diseño metodológico y financiero de iniciativas empresariales de alto impacto.",
                },
                {
                    title: "Modelamiento de Negocio",
                    text: "Optimización de estructuras de costos y flujos de ingresos.",
                },
            ],
            cta: "Solicitar presupuesto",
        },
        {
            title: "Contabilidad General",
            icon: Bank,
            features: [
                {
                    title: "Servicios de Contabilidad General",
                    text: "Mantenimiento de libros, estados financieros y balances mensuales de alta precisión.",
                },
                {
                    title: "Cumplimiento Tributario",
                    text: "Declaraciones de impuestos (IVA, Renta) y optimización de carga tributaria legal.",
                },
                {
                    title: "Asesoría Laboral",
                    text: "Liquidaciones de sueldos, contratos y trámites en la Inspección del Trabajo.",
                },
            ],
            cta: "Ver detalles del servicio",
        },
    ],
};