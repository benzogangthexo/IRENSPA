import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { PHONE_MAIN, salons } from "@/content/site";

import { BookButton } from "./book-button";
import { SectionHead } from "./section-head";

export function Salons() {
  return (
    <Section id="salons" labelledBy="salons-title">
      <Container>
        <SectionHead
          index="07"
          eyebrow="Адреса"
          titleId="salons-title"
          lines={["Два адреса,", "разные часы"]}
          lead={
            <>
              Общий номер сети:{" "}
              <a href={`tel:${PHONE_MAIN.tel}`} className="tabular whitespace-nowrap text-fg underline-offset-4 hover:underline">
                {PHONE_MAIN.display}
              </a>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:gap-8">
          {[salons.spa, salons.vip].map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <article
                id={`salon-${s.id}`}
                aria-labelledby={`salon-${s.id}-title`}
                className="flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-surface"
              >
                <div className="relative aspect-[16/10] bg-surface-2">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    quality={75}
                    sizes="(min-width: 768px) 46vw, 94vw"
                    placeholder="blur"
                    className="object-cover"
                    style={s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-8 lg:p-10">
                  <h3 id={`salon-${s.id}-title`} className="flex items-baseline">
                    <span className="mr-2 font-hand text-[2.6rem] leading-none text-brand-3">{s.hand}</span>
                    <span className="font-display text-[2rem] leading-none tracking-[0.16em]">IREN</span>
                  </h3>
                  <p className="mt-3 text-fg-muted">{s.summary}</p>
                  <dl className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="t-eyebrow text-fg-muted">Адрес</dt>
                      <dd className="mt-2">
                        {s.address}
                        <span className="mt-0.5 block text-sm text-fg-muted">{s.area}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="t-eyebrow text-fg-muted">Часы</dt>
                      <dd className="mt-2">
                        {s.hours.map((h) => (
                          <span key={h.days} className="flex justify-between gap-4 sm:justify-start">
                            <span className="w-14 text-fg-muted">{h.days}</span>
                            <span className="tabular">{h.time}</span>
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="t-eyebrow text-fg-muted">Телефон</dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${s.phone.tel}`}
                          className="tabular inline-flex min-h-11 items-center text-lg underline-offset-4 hover:underline"
                        >
                          {s.phone.display}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="t-eyebrow text-fg-muted">Яндекс Карты</dt>
                      <dd className="mt-1">
                        <a
                          href={s.yandexUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1.5 underline-offset-4 hover:underline"
                        >
                          <span className="text-brand-3">5,0</span>
                          <span className="tabular text-fg-muted">· {s.rating.reviews} отзывов</span>
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                          <span className="sr-only">(откроется в новой вкладке)</span>
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3 pt-2 md:mt-auto">
                    <BookButton salon={s.id} label={`Записаться в ${s.name}`} />
                    <Button asChild variant="outline">
                      <a href={s.routeUrl} target="_blank" rel="noopener noreferrer">
                        Маршрут
                        <ArrowUpRight aria-hidden="true" />
                        <span className="sr-only">в Яндекс Картах (откроется в новой вкладке)</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
