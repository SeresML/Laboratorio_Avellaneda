import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  const href = `/servicios/${service.slug}/`;
  return (
    <article className="flex flex-col items-center text-center">
      <Link href={href} className="relative flex-shrink-0 block w-[160px] h-[160px] mb-5 transition-transform hover:scale-105" tabIndex={-1} aria-hidden="true">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="160px"
          className="object-contain"
        />
      </Link>
      <div className="flex flex-col items-center">
        <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
          <Link href={href} className="hover:opacity-80 transition-opacity">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] text-gray-500 font-medium leading-relaxed max-w-[320px]">
          {service.excerpt}
        </p>
      </div>
    </article>
  );
}
