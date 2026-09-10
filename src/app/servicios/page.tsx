import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ContactCards from "@/components/ContactCards";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conocé todos los servicios médicos y de análisis clínicos que ofrecemos en Laboratorio Avellaneda.",
  alternates: { canonical: "/servicios/" },
};

export default function ServiciosIndexPage() {
  return (
    <>
      <Hero
        title="Nuestros Servicios"
        subtitle="Resultados confiables, atención rápida y tecnología de avanzada para cuidar tu salud."
        compact
      />

      <div className="bg-[#f0f8ff] py-8">
        <ServicesGrid />
      </div>

      <ContactCards />
      
      <Faq />
    </>
  );
}
