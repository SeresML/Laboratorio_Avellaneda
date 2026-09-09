import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ObrasSociales from "@/components/ObrasSociales";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { home, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Análisis clínicos en Avellaneda` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title={home.heroTitle}
        subtitle={home.heroSubtitle}
        image={{ src: home.heroImage, alt: home.heroImageAlt }}
      />

      <section className="section">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex justify-center">
          <p className="w-full text-center text-xl leading-relaxed text-ink lg:text-[24px]">
            <span className="lg:whitespace-nowrap">Desde 2007 realizamos análisis clínicos con compromiso, calidad y atención personalizada. Mejoramos</span> <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">constantemente para brindarte resultados confiables y el mejor servicio. Tu salud está en buenas manos.</span>
          </p>
        </div>
      </section>

      <div className="bg-[#f0f8ff]">
        <ServicesGrid title="Nuestros servicios" onlyFeatured showAllLink />
      </div>

      <ObrasSociales />

      <div className="bg-[#f0f8ff]">
        <ContactCards title="Contactanos" />
        <section className="pb-24">
          <div className="container-site max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>

      <Faq />
    </>
  );
}
