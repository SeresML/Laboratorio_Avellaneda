import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { site } from "@/lib/site";

type Props = { title?: string; as?: "h1" | "h2" };

export default function ContactCards({ title, as = "h2" }: Props) {
  const Heading = as;
  const items = [
    {
      label: "Turnos",
      value: site.whatsapp.turnos.number,
      href: site.whatsapp.turnos.href,
      Icon: FaWhatsapp,
    },
    {
      label: "Recepción",
      value: site.whatsapp.recepcion.number,
      href: site.whatsapp.recepcion.href,
      Icon: FaWhatsapp,
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      Icon: FaEnvelope,
    },
  ];

  return (
    <section className="pt-20 pb-12" aria-labelledby={title ? "contacto-titulo" : undefined}>
      <div className="container-site">
        {title && (
          <Heading id="contacto-titulo" className="text-[32px] sm:text-[40px] font-extrabold text-center text-[#2d3748] mb-12">
            {title}
          </Heading>
        )}
        <ul className="grid gap-12 md:grid-cols-3 max-w-4xl mx-auto">
          {items.map(({ label, value, href, Icon }) => (
            <li key={label} className="text-center">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-4"
              >
                <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#00bcd4] text-[36px] transition-transform group-hover:scale-105 shadow-sm">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[18px] font-bold text-[#333] group-hover:underline">
                    {label}
                  </span>
                  <span className="block text-[14px] text-gray-500 font-medium mt-1">
                    {value}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
