/**
 * Contenido del sitio — ÚNICO lugar para editar textos, teléfonos, links y servicios.
 * Nadie del equipo necesita tocar componentes para actualizar la web.
 */

export const site = {
  name: "Laboratorio Avellaneda",
  legalName: "Laboratorio Avellaneda",
  tagline: "Turnos rápidos, atención personalizada y resultados seguros",
  description:
    "Laboratorio de análisis clínicos en Avellaneda desde 2007. Análisis clínicos, estudios de ADN, microbiología y virología, estudio prenatal no invasivo y extracción a domicilio. Trabajamos con PAMI y más de 200 obras sociales y prepagas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://analisisclinicos.com.ar",
  email: "laboratorioavellaneda1221@gmail.com",
  foundedYear: 2007,
  logo: "/images/logo.svg",
  address: {
    street: "San Martín 1221",
    city: "Avellaneda",
    region: "Buenos Aires",
    country: "AR",
    mapsUrl: "https://maps.app.goo.gl/8rYga9MXhnAg9RLG9",
    // Mapa embebido en /contacto. No requiere API key.
    mapEmbedUrl:
      "https://www.google.com/maps?q=San+Mart%C3%ADn+1221,+Avellaneda,+Buenos+Aires&output=embed",
  },
  whatsapp: {
    turnos: {
      label: "Turnos",
      number: "11-3067-0949",
      href: "https://wa.link/0mevrq",
    },
    recepcion: {
      label: "Recepción",
      number: "11-3889-4437",
      href: "https://wa.link/y4dodu",
    },
  },
  phone: {
    label: "Teléfono",
    number: "4201-6829",
    href: "tel:+541142016829",
  },
  social: {
    facebook: "https://www.facebook.com/LaboratorioAvellanedaArg",
    instagram: "https://www.instagram.com/laboratorioavellaneda",
  },
  cta: {
    label: "Sacar turno",
    href: "https://wa.link/0mevrq",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Si es true, despliega la lista de servicios. */
  children?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Servicios", href: "/servicios/", children: true },
  { label: "Contacto", href: "/contacto/" },
];

export type Service = {
  slug: string;
  title: string;
  /** Nombre corto para menú y footer. */
  shortTitle?: string;
  /** Texto de la tarjeta en Home y Servicios. */
  excerpt: string;
  /** Subtítulo del encabezado en la página del servicio. */
  lead: string;
  /** Párrafos de la página del servicio. */
  paragraphs: string[];
  image: string;
  imageAlt: string;
  /** Meta description (SEO). */
  seoDescription: string;
  /** Si es true, se muestra en la Home (la Home muestra 4 de los 5). */
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "analisis-clinicos",
    title: "Análisis Clínicos",
    excerpt:
      "Control integral de tu salud con estudios de rutina, perfiles hormonales y metabólicos. Precisión y confianza para tu bienestar.",
    lead: "Control integral de tu salud con estudios de rutina, perfiles hormonales y metabólicos. Precisión y confianza para tu bienestar.",
    paragraphs: [
      "En nuestro laboratorio realizamos análisis de rutina para el control general de la salud: perfil lipídico, hepático, renal, glucemia, orina y más.",
      "También hacemos hemogramas y estudios de hemostasia con equipos de última generación.",
      "Ofrecemos una evaluación hormonal completa, que incluye tiroides, fertilidad, función suprarrenal y metabolismo.",
      "Además, contamos con detección de sustancias, drogas de abuso y alcohol, junto con monitoreo terapéutico de fármacos, garantizando resultados confiables para el seguimiento médico de cada paciente.",
    ],
    image: "/images/servicios-1.png",
    imageAlt: "Análisis clínicos en Laboratorio Avellaneda",
    seoDescription:
      "Realizamos análisis clínicos de rutina, hormonales y metabólicos en Avellaneda. Resultados precisos y atención personalizada.",
    featured: true,
  },
  {
    slug: "estudios-de-adn",
    title: "Estudios de ADN",
    excerpt:
      "Pruebas genéticas y de filiación con máxima exactitud y confidencialidad. Tecnología avanzada para detectar vínculos y mutaciones.",
    lead: "Pruebas genéticas y de filiación con máxima exactitud y confidencialidad.",
    paragraphs: [
      "Ofrecemos estudios genéticos con tecnología de vanguardia para garantizar la máxima exactitud.",
      "Realizamos pruebas de filiación y parentesco familiar, bajo cadena de custodia, asegurando la validez legal y la confidencialidad de los resultados.",
      "Nuestros análisis de ADN permiten detectar mutaciones, identificar vínculos biológicos y brindar información valiosa para decisiones personales o médicas.",
    ],
    image: "/images/servicios-2.png",
    imageAlt: "Estudios de ADN y pruebas de filiación",
    seoDescription:
      "Estudios de ADN y pruebas de filiación en Avellaneda. Máxima confidencialidad y resultados exactos con tecnología avanzada.",
    featured: true,
  },
  {
    slug: "microbiologia-y-virologia",
    title: "Microbiología y Virología",
    excerpt:
      "Diagnóstico de infecciones bacterianas, virales y parasitarias con tecnología PCR. Resultados confiables y de alta sensibilidad.",
    lead: "Diagnóstico de infecciones bacterianas, virales y parasitarias con tecnología PCR. Resultados confiables y de alta sensibilidad.",
    paragraphs: [
      "Nos especializamos en el diagnóstico de infecciones bacterianas, virales y parasitarias, mediante cultivos, análisis coproparasitológicos y estudios específicos.",
      "Aplicamos técnicas de Biología Molecular de alta sensibilidad, como la PCR (Reacción en Cadena de la Polimerasa), para la detección genética y viral de microorganismos.",
      "Nuestro enfoque combina precisión científica y rapidez en los resultados para apoyar tratamientos efectivos.",
    ],
    image: "/images/servicios-3.png",
    imageAlt: "Microbiología y virología con tecnología PCR",
    seoDescription:
      "Diagnóstico microbiológico y virológico avanzado en Avellaneda. Detección de bacterias, virus y parásitos con tecnología PCR.",
    featured: true,
  },
  {
    slug: "estudio-prenatal-no-invasivo",
    title: "Estudio Prenatal No Invasivo",
    shortTitle: "Estudio Prenatal",
    excerpt:
      "Analiza el ADN fetal sin riesgos para la madre ni el bebé. Detecta predisposiciones genéticas, sexo y hereditaria con precisión.",
    lead: "Analiza el ADN fetal sin riesgos para la madre ni el bebé. Detecta predisposiciones genéticas y hereditarias con precisión.",
    paragraphs: [
      "El estudio prenatal no invasivo evalúa el ADN fetal en sangre materna, sin riesgos para la madre ni el bebé. Permite detectar alteraciones cromosómicas y predisposición genética a enfermedades comunes de manera temprana.",
      "A través del Gen 360, analizamos además características farmacogenéticas y hereditarias, aportando datos clave para una medicina personalizada.",
      "Incluye marcadores como PAPP-A y Beta libre HCG, fundamentales para el control del embarazo.",
    ],
    image: "/images/servicios-4.png",
    imageAlt: "Estudio prenatal no invasivo",
    seoDescription:
      "Estudio prenatal no invasivo en Avellaneda. Analiza el ADN fetal sin riesgos y detecta anomalías genéticas tempranamente.",
    featured: true,
  },
  {
    slug: "extraccion-a-domicilio",
    title: "Extracción a Domicilio",
    excerpt:
      "Extracciones a domicilio. Agendá para análisis clínicos y estudios sin moverte de tu casa.",
    lead: "Extracciones a domicilio. Agendá para análisis clínicos y estudios sin moverte de tu casa.",
    paragraphs: [
      "Pensado para tu comodidad. Nuestro servicio de extracción a domicilio te permite realizar tus estudios sin necesidad de trasladarte.",
      "Un profesional del laboratorio se acerca a tu hogar o empresa, garantizando la misma calidad, seguridad y confiabilidad que en nuestras instalaciones.",
      "Agendá tu turno y nosotros nos ocupamos del resto.",
    ],
    image: "/images/servicios-1.png",
    imageAlt: "Extracción de sangre a domicilio",
    seoDescription:
      "Extracción de sangre a domicilio en Avellaneda y zona sur. Un profesional del laboratorio va a tu casa o empresa. Agendá tu turno por WhatsApp.",
    featured: false,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const faqs = [
  {
    question: "¿Debo solicitar turno?",
    answer:
      "En Laboratorio Avellaneda trabajamos generalmente sin turno previo. Para una atención más ágil en sede, envíe la orden previamente. Para estudios especiales, como curvas de glucosa, prolactina, cortisol, extracciones pediátricas y toma de muestras ginecológicas, pedimos que se asesoren con nosotros por mensaje con anterioridad.",
  },
  {
    question: "¿Cómo y dónde debo recolectar la orina?",
    answer:
      "Recolecte la primera orina de la mañana en un frasco plástico estéril. Si usted se levanta por la noche, junte la primera orina de la mañana con un mínimo de retención de 3 horas.",
  },
  {
    question: "¿Puedo comer un caramelo y/o chicle, o ingerir mate, café o té?",
    answer:
      "No es posible, dado que pueden alterar algunos de los resultados de sus análisis.",
  },
  {
    question: "¿En qué consiste el ayuno?",
    answer:
      "Concurrir en ayunas es no ingerir alimentos sólidos ni líquidos (excepto agua) durante el lapso indicado por nuestro personal de recepción.",
  },
  {
    question: "¿Qué documentación debo llevar al momento de presentarme para los análisis?",
    answer:
      "Deberá traer la orden médica debidamente cumplimentada por el médico tratante, la credencial de su cobertura y su documento de identidad.",
  },
  {
    question: "¿Cómo puedo solicitar un presupuesto de los estudios que debo realizar?",
    answer:
      "Sí. Envíenos la orden por WhatsApp o e-mail y le enviaremos el presupuesto correspondiente.",
  },
  {
    question: "¿Me podrán leer por teléfono mis resultados?",
    answer:
      "No. Para mayor seguridad en la interpretación y en resguardo de su privacidad, Laboratorio Avellaneda solo informará vía telefónica los resultados a su médico tratante, al teléfono que usted registre en la admisión.",
  },
  {
    question: "¿Puedo enviar a otra persona a retirar mis estudios?",
    answer:
      "Sí, siempre y cuando presente el talón de retiro correspondiente.",
  },
];

/**
 * Obras sociales y prepagas destacadas. Los logos van en /public/images/obras-sociales/.
 * Reemplazá los .svg de ejemplo por los logos reales (mismo nombre de archivo o
 * actualizá la ruta acá).
 */
export const obrasSociales = [
  { name: "FATSA", logo: "/images/Fatsa.png" },
  { name: "Galeno", logo: "/images/Galeno.png" },
  { name: "IOMA", logo: "/images/Ioma.png" },
  { name: "OSDE", logo: "/images/Osde.png" },
  { name: "PAMI", logo: "/images/Pami.png" },
  { name: "Sancor Salud", logo: "/images/Sancord.png" },
  { name: "Swiss Medical", logo: "/images/Swiss-Medical.png" },
];

export const about = {
  title: "Nosotros",
  image: "/images/nosotros/foto3.jpg", // Recepción
  imageAlt: "Recepción de Laboratorio Avellaneda",
  paragraphs: [
    "En Laboratorio Avellaneda nos especializamos en análisis clínicos desde 2007, consolidando un equipo de profesionales comprometidos con brindar una atención cálida, segura y de excelencia. Creemos que nuestro mayor valor es el paciente, por eso trabajamos cada día para ofrecer un servicio confiable, preciso y humano.",
    "Nuestro laboratorio cuenta con un sistema de Gestión de Calidad integral. Realizamos controles internos diarios y participamos de auditorías externas con frecuencia mensual, garantizando resultados exactos y procesos acordes a los más altos estándares del sector.",
    "A lo largo de estos años, hemos invertido de manera constante en la mejora de nuestros procedimientos, tecnología y equipamiento, con el objetivo de asegurar diagnósticos confiables y una experiencia de atención ágil y eficiente.",
    "En Laboratorio Avellaneda realizamos todo tipo de análisis clínicos, ofreciendo un servicio completo para pacientes, profesionales y empresas, siempre con el compromiso de brindar resultados seguros, rápidos y de calidad.",
  ],
  gallery: [
    { src: "/images/nosotros/foto4.jpg", alt: "Sala de espera" },
    { src: "/images/nosotros/foto2.jpg", alt: "Equipamiento del laboratorio 1" },
    { src: "/images/nosotros/foto1.jpg", alt: "Equipamiento del laboratorio 2" },
  ],
};

export const home = {
  heroTitle: "Laboratorio Avellaneda",
  heroSubtitle: site.tagline,
  heroImage: "/images/hero-bg.jpg",
  heroImageAlt: "Laboratorio Avellaneda — análisis clínicos",
  intro:
    "Desde 2007 realizamos análisis clínicos con compromiso, calidad y atención personalizada. Mejoramos constantemente para brindarte resultados confiables y el mejor servicio. Tu salud está en buenas manos.",
  coverageTitle: "Trabajamos con PAMI y más de 200 obras sociales y prepagas",
};
