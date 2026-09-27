import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { StickyStack } from "@/components/motion/sticky-stack";
import { directions, salons } from "@/content/site";
import { priceLabel, serviceById } from "@/lib/services";

import { PricesLink } from "./prices-link";
import { SectionHead } from "./section-head";

export function Directions() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHead
          index="02"
          eyebrow="Направления"
          titleId="services-title"
          lines={["Волосы, ногти,", "кожа и хаммам"]}
          lead="Пять направлений в двух салонах. Цены «от» взяты из онлайн-записи; хаммам есть только в Spa IREN."
        />
        <StickyStack top="clamp(0.75rem, 3svh, 2.5rem)" step={10} shrink={0.03} className="mt-12 md:mt-16">
          {directions.map((d, i) => (
            <article
              key={d.id}
              aria-labelledby={`dir-${d.id}`}
              className="grid overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-surface shadow-[var(--shadow-lift)] md:h-[min(72svh,36rem)] md:grid-cols-12"
            >
              <div className="relative aspect-[3/1] min-[360px]:aspect-[5/2] sm:aspect-[16/9] md:col-span-5 md:aspect-auto">
                <Image
                  src={d.image.src}
                  alt={d.alt}
                  fill
                  quality={75}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-col p-4 sm:p-8 md:col-span-7 md:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4 text-xs text-fg-muted sm:text-sm">
                  <span className="tabular">
                    {String(i + 1).padStart(2, "0")} / {String(directions.length).padStart(2, "0")}
                  </span>
                  <span>{d.salons.map((s) => salons[s].name).join(" и ")}</span>
                </div>
                <h3 id={`dir-${d.id}`} className="t-h3 mt-3 sm:mt-6 md:text-[clamp(1.9rem,1.3rem+1.4vw,2.9rem)]">
                  {d.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-[0.95rem] leading-snug text-fg-muted sm:mt-4 sm:text-base sm:leading-relaxed">
                  {d.text}
                </p>
                <dl className="mt-4 divide-y divide-line border-y border-line sm:mt-8 md:mt-auto">
                  {d.prices.map((p) => {
                    const s = serviceById(p.serviceId);
                    if (!s) return null;
                    return (
                      <div key={p.serviceId} className="flex items-baseline justify-between gap-4 py-1.5 sm:py-3">
                        <dt className="min-w-0 text-[0.95rem]">
                          {p.label}
                          {d.salons.length > 1 ? (
                            <span className="ml-2 text-xs text-fg-muted">{salons[s.salon].name}</span>
                          ) : null}
                        </dt>
                        <dd className="tabular shrink-0 text-[0.95rem] text-brand-3">{priceLabel(s)}</dd>
                      </div>
                    );
                  })}
                </dl>
                <div className="mt-6 hidden sm:block">
                  <PricesLink category={d.category} salon={d.salons[0]} label={`Все цены: ${d.title.toLowerCase()}`} />
                </div>
              </div>
            </article>
          ))}
        </StickyStack>
      </Container>
    </Section>
  );
}
