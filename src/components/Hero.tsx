import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  title: string;
  subtitle?: string;
  /** Texto del botón (por defecto "Sacar turno"). */
  ctaLabel?: string;
  /** Muestra un segundo botón hacia una ruta interna. */
  secondary?: { label: string; href: string };
  image?: { src: string; alt: string };
  /** Variante compacta para páginas interiores. */
  compact?: boolean;
};

export default function Hero({ title, subtitle, ctaLabel, secondary, image, compact }: Props) {
  return (
    <section className={`relative flex items-center ${compact ? "min-h-[40vh]" : "min-h-[85vh]"}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Un degradado suave solo en la izquierda para que el texto resalte sin oscurecer toda la foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>
      )}
      
      <div className="container-site relative z-10 w-full flex justify-center">
        {/* Contenedor del texto centrado en toda la pantalla */}
        <div className="w-fit flex flex-col items-center text-center pt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[76px] xl:text-[88px] font-extrabold text-white drop-shadow-xl leading-tight tracking-tight lg:whitespace-nowrap">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-[26px] font-bold text-white drop-shadow-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full">
            <a
              href={site.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#6366f1] px-14 py-4 text-lg sm:text-[20px] font-bold text-white shadow-lg hover:bg-[#4f46e5] transition-colors"
            >
              {ctaLabel ?? site.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
