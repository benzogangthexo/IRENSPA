import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ScrollMarquee } from "@/components/motion/scroll-marquee";
import { reviews, salons } from "@/content/site";

import { SectionHead } from "./section-head";

const WORDS = ["Хаммам", "Airtouch", "Маникюр в 4 руки", "Total blonde", "Массаж в 4 руки", "Девичник", "Liftera-A"];

export function Reviews() {
  return (
    <Section id="reviews" labelledBy="reviews-title" className="overflow-clip">
      <ScrollMarquee
        direction={-1}
        distance={25}
        className="border-y border-line py-5 font-display text-[clamp(1.8rem,1.2rem+3vw,4rem)] leading-none"
        items={WORDS.map((w, i) => (
          <span key={w} className={i % 2 ? "text-bronze italic" : undefined}>
            {w}
          </span>
        ))}
      />
      <Container className="mt-[calc(var(--section-y)*0.6)]">
        <SectionHead
          index="08"
          eyebrow="Отзывы"
          titleId="reviews-title"
          lines={["Что пишут гости", "на Яндекс Картах"]}
          lead={`Spa IREN: ${salons.spa.rating.reviews} отзывов, VIP IREN: ${salons.vip.rating.reviews}. Здесь восемь из них, коротко.`}
        />
        <ul className="mt-12 columns-1 gap-5 md:mt-16 md:columns-2 xl:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
          {reviews.map((r, i) => (
            <li key={r.id}>
              <Reveal delay={(i % 3) * 0.06}>
                <figure className="rounded-[var(--radius-xl)] border border-line bg-surface p-6 sm:p-8">
                  <span aria-hidden="true" className="text-bronze block font-display text-5xl leading-[0.6]">
                    «
                  </span>
                  <blockquote className="mt-3 text-[1.05rem] leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line pt-4 text-sm">
                    <span className="font-medium">{r.name}</span>
                    <span className="text-fg-muted">
                      {salons[r.salon].name}, {r.date}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {[salons.spa, salons.vip].map((s) => (
            <a
              key={s.id}
              href={`${s.yandexUrl}reviews/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-brand-3 underline-offset-4 hover:underline"
            >
              Все отзывы {s.name}
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(откроется в новой вкладке)</span>
            </a>
          ))}
        </p>
      </Container>
    </Section>
  );
}
