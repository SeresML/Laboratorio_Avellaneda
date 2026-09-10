import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ContactCards from "@/components/ContactCards";
import Faq from "@/components/Faq";
import { getService, services, site, home } from "@/lib/site";

type Params = { slug: string };

// Solo se generan las 5 páginas de servicios; cualquier otra ruta da 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.seoDescription,
    alternates: { canonical: `/${service.slug}/` },
    openGraph: { title: `${service.title} - ${site.name}`, description: service.seoDescription },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Banner */}
      <section 
        className="relative w-full min-h-[500px] py-20 overflow-hidden flex items-center justify-center bg-gray-200"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={home.heroImage}
            alt={`${service.title} banner`}
            fill
            className="object-cover object-center"
          />
          {/* Overlay claro/azulado para replicar el estilo de la captura */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/70 to-blue-500/40"></div>
        </div>
        
        <div className="container-site relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start pt-10 px-4">
          
          {/* Hero Left Column: Title and Lead */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl sm:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight drop-shadow-md text-balance">
              {service.title}
            </h1>
            <p className="mt-6 text-white text-lg sm:text-[20px] max-w-xl font-medium drop-shadow-md leading-relaxed">
              {service.lead}
            </p>
            <a
              href={site.whatsapp.turnos.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-[#5a67d8] hover:bg-[#434190] text-white text-[18px] font-bold py-4 px-10 rounded-md shadow-lg transition-colors inline-block"
            >
              Sacar Turno
            </a>
          </div>

          {/* Hero Right Column: Contact Form */}
          <div className="w-full max-w-xl mx-auto">
            <ContactForm title="Escribinos" context={service.title} showMap={false} darkVariant={true} />
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white relative z-20">
        <div className="container-site max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text and CTA */}
            <div className="flex flex-col">
              <div className="prose prose-lg prose-blue max-w-none text-[#4a5568] leading-relaxed text-[16px] sm:text-[18px]">
                {service.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-6">{p}</p>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center lg:justify-center">
                <a
                  href={site.whatsapp.turnos.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5a67d8] hover:bg-[#434190] text-white text-[16px] font-bold py-3 px-12 rounded shadow-md transition-colors inline-block text-center"
                >
                  Sacar Turno
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="bg-[#f0f8ff]">
        <ContactCards />
      </div>
      
      <Faq />
    </>
  );
}
