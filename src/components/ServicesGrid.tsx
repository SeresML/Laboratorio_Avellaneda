import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site";

type Props = {
  title?: string;
  /** Solo los destacados (Home) o todos (Servicios). */
  onlyFeatured?: boolean;
  /** Muestra el botón "Ver más" hacia /servicios/. */
  showAllLink?: boolean;
};

export default function ServicesGrid({ title, onlyFeatured, showAllLink }: Props) {
  const list = onlyFeatured ? services.filter((s) => s.featured) : services;

  return (
    <section className="section py-16" aria-labelledby={title ? "servicios-titulo" : undefined}>
      <div className="container-site">
        {title && (
          <h2 id="servicios-titulo" className="text-[32px] sm:text-[40px] font-extrabold text-center text-[#2d3748] mb-12">
            {title}
          </h2>
        )}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        {showAllLink && (
          <div className="mt-12 text-center">
            <Link href="/servicios/" className="text-[17px] text-[#5a67d8] hover:underline transition-all">
              Ver más
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
