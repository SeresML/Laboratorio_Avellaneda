import type { Metadata } from "next";
import Image from "next/image";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import { site, home } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactá a Laboratorio Avellaneda: turnos por WhatsApp ${site.whatsapp.turnos.number}, recepción ${site.whatsapp.recepcion.number}, ${site.email}. ${site.address.street}, ${site.address.city}.`,
  alternates: { canonical: "/contacto/" },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section 
        className="relative w-full h-[350px] sm:h-[450px] overflow-hidden flex items-center justify-center bg-gray-200"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={home.heroImage}
            alt="Contacto banner"
            fill
            className="object-cover object-center"
          />
          {/* Overlay oscuro para asegurar lectura en el centro */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-site relative z-10 flex flex-col items-center text-center">
          <h1 className="text-white font-bold text-5xl sm:text-[72px] leading-tight tracking-tight drop-shadow-lg">
            Contacto
          </h1>
        </div>
      </section>

      <ContactCards />

      <section className="section !pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm context="Contacto" showMap={false} />

          <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
            <iframe
              title={`Mapa: ${site.address.street}, ${site.address.city}`}
              src={site.address.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] w-full flex-1 border-0"
              allowFullScreen
            />
            <div className="p-6">
              <p className="text-xl font-semibold text-primary">
                {site.address.street}, {site.address.city}
              </p>
              <p className="mt-1 text-muted">Provincia de {site.address.region}</p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet mt-3 inline-block font-semibold"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
