import { faqs } from "@/lib/site";

type Props = { title?: string };

export default function Faq({ title = "Preguntas frecuentes" }: Props) {
  return (
    <section className="bg-white py-20" aria-labelledby="faq-titulo">
      <div className="container-site max-w-[1400px]">
        <h2 id="faq-titulo" className="text-[36px] sm:text-[44px] font-extrabold text-center text-[#333] mb-12">
          {title}
        </h2>
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
          {faqs.map((f, i) => (
            <details key={f.question} className="group rounded-md border border-gray-200 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-[#333] outline-none list-none [&::-webkit-details-marker]:hidden">
                <span>{f.question}</span>
                <span className="text-gray-800 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-[14px] leading-relaxed text-gray-500">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
