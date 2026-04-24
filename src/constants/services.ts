import Bank from "@/assets/Bank";
import Finance from "@/assets/Finance";

export const services = {
  badge: "Nuestras soluciones",

  title: "Áreas de Especialización",

  description:
    "Acompañamos a emprendedores y empresas desde la idea hasta el crecimiento, integrando financiamiento, estrategia y gestión.",

  items: [
    {
      title: "Desarrollo y Financiamiento",
      icon: Finance,
      features: [
        {
          title: "Fondos Concursables",
          text: "Postulación a programas como Sercotec, FOSIS, CORFO y otros, con acompañamiento completo.",
        },
        {
          title: "Formulación de Proyectos",
          text: "Diseño técnico y financiero de proyectos con alto potencial de adjudicación.",
        },
        {
          title: "Modelo de Negocio",
          text: "Estructuración estratégica para validar, ordenar y escalar tu emprendimiento.",
        },
        {
          title: "Formalización de Emprendimientos",
          text: "Inicio de actividades, estructura legal y orden administrativo desde cero.",
        },
      ],
      cta: "Postular a financiamiento",
    },
    {
      title: "Gestión Empresarial",
      icon: Bank,
      features: [
        {
          title: "Contabilidad General",
          text: "Gestión contable completa, estados financieros y control del negocio.",
        },
        {
          title: "Cumplimiento Tributario",
          text: "Declaraciones de impuestos y optimización tributaria dentro del marco legal.",
        },
        {
          title: "Licitaciones en Mercado Público",
          text: "Asesoría para vender al Estado y participar en oportunidades públicas.",
        },
        {
          title: "Asesoría Integral Pyme",
          text: "Acompañamiento estratégico continuo según la etapa de tu empresa.",
        },
      ],
      cta: "Ordenar mi negocio",
    },
  ],
};

export const pricingImages = [
  "price1.webp",
  "price2.webp",
  "price3.webp",
];