import type { Metadata } from "next";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { about, site, home } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Laboratorio Avellaneda: análisis clínicos desde 2007 con un sistema de gestión de calidad integral, controles internos diarios y auditorías externas mensuales.",
  alternates: { canonical: "/nosotros/" },
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Banner */}
      <section 
        className="relative w-full h-[350px] sm:h-[450px] overflow-hidden flex items-center justify-center bg-gray-200"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={home.heroImage} // Usamos la del home que coincide con la médica de la captura
            alt="Nosotros banner"
            fill
            className="object-cover object-center"
          />
          {/* Overlay oscuro para asegurar lectura en el centro */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-site relative z-10 w-full flex justify-center text-center">
          <h1 className="text-[48px] sm:text-[72px] font-extrabold text-white tracking-tight drop-shadow-md">
            {about.title}
          </h1>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <section className="pt-8 pb-16 bg-white relative z-20">
        <div className="container-site max-w-[1200px]">
          {/* 2 Columnas */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-14 items-start">
            {/* Imagen Recepción */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={about.image} // Usamos la imagen original de about para este cuadro
                alt="Laboratorio Avellaneda Recepción"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Textos */}
            <div className="flex flex-col gap-4 text-[14px] text-[#333] leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>

          {/* Galería */}
          <ul className="mt-16 grid gap-6 sm:grid-cols-3">
            {about.gallery.map((img) => (
              <li key={img.src} className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
