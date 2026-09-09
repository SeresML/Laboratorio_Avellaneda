import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, Icon: FaFacebookF },
  { label: "Instagram", href: site.social.instagram, Icon: FaInstagram },
  { label: "WhatsApp", href: site.whatsapp.turnos.href, Icon: FaWhatsapp },
  { label: "Email", href: `mailto:${site.email}`, Icon: FaEnvelope },
  { label: "Ubicación", href: site.address.mapsUrl, Icon: FaLocationDot },
];

export default function Footer() {
  return (
    <footer className="bg-[#cbd2db] text-[#333] pt-16 pb-12">
      <div className="container-site max-w-[1200px] grid gap-10 md:grid-cols-[1.5fr_1fr_1.5fr] items-start">
        {/* Izquierda: Marca y Redes */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Inicio">
            <Image
              src="/images/logo-microscopio.png"
              alt="Laboratorio Avellaneda"
              width={200}
              height={60}
              className="w-auto h-[60px]"
            />
          </Link>
          <p className="text-[13px] font-medium leading-relaxed max-w-[240px]">
            Turnos rápidos, atención personalizada y resultados seguros
          </p>

          <ul className="flex flex-wrap gap-3 mt-4" aria-label="Redes y contacto">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#00bcd4] text-[16px] transition-transform hover:scale-110 shadow-sm"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Medio: Estudios */}
        <nav aria-label="Estudios">
          <h2 className="text-[16px] font-bold text-[#333] mb-6">Estudios</h2>
          <ul className="flex flex-col gap-4 text-[13px] font-medium">
            <li><Link href="/analisis-clinicos/" className="hover:underline">Análisis Clínicos</Link></li>
            <li><Link href="/adn/" className="hover:underline">Estudios de ADN</Link></li>
            <li><Link href="/microbiologia/" className="hover:underline">Microbiología y Virología</Link></li>
            <li><Link href="/prenatal/" className="hover:underline">Estudio Prenatal</Link></li>
            <li><Link href="/servicios/" className="hover:underline">Ver más</Link></li>
          </ul>
        </nav>

        {/* Derecha: Contacto */}
        <div>
          <h2 className="text-[16px] font-bold text-[#333] mb-6">Contacto</h2>
          <ul className="flex flex-col gap-4 text-[13px] font-medium">
            <li>
              <a href={site.whatsapp.turnos.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <FaWhatsapp className="text-[#00bcd4] text-[16px]" /> 11 3067 0949
              </a>
            </li>
            <li>
              <a href={site.phone.href} className="flex items-center gap-3 hover:underline">
                <FaPhone className="text-[#00bcd4] text-[16px]" /> 4201-6829
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:underline">
                <FaEnvelope className="text-[#00bcd4] text-[16px]" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <FaLocationDot className="text-[#00bcd4] text-[16px]" /> San Martin 1221, Avellaneda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
