import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

/** Botón flotante de WhatsApp (canal principal de turnos del laboratorio). */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp.turnos.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sacar turno por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-3xl text-white shadow-lg transition-colors hover:bg-whatsapp-dark sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
