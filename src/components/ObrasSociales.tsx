import Image from "next/image";
import { home, obrasSociales } from "@/lib/site";

export default function ObrasSociales() {
  // Triplicamos la lista para que la animación de scroll infinito sea perfecta
  const logos = [...obrasSociales, ...obrasSociales, ...obrasSociales];

  return (
    <section className="section bg-white py-16" aria-labelledby="cobertura-titulo">
      <div className="container-site">
        <h2 id="cobertura-titulo" className="text-[28px] sm:text-[36px] font-bold text-center text-[#333] mb-16">
          {home.coverageTitle}
        </h2>
        
        <div className="relative w-full overflow-hidden group">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33333%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-marquee items-center gap-16 sm:gap-24">
            {logos.map((o, i) => (
              <div key={`${o.name}-${i}`} className="flex-shrink-0 w-36 sm:w-48 flex justify-center">
                <Image
                  src={o.logo}
                  alt={o.name}
                  width={200}
                  height={80}
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
