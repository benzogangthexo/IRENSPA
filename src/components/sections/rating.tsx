import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import mirror from "@/assets/photos/mirror.jpg";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Section } from "@/components/layout/section";
import { Counter } from "@/components/motion/counter";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { ScrollRotate } from "@/components/motion/scroll-rotate";
import { salons } from "@/content/site";

const RING = "SPA IREN · КАРЛА МАРКСА, 32 · VIP IREN · ВАРВАРСКАЯ, 8/22 · ";

export function Rating() {
  return (
    <Section id="rating" labelledBy="rating-title" className="overflow-clip">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-x-[var(--col-gap)]">
        <div className="lg:col-span-5">
          <Eyebrow index="05">Оценки гостей</Eyebrow>
          <MaskReveal as="h2" id="rating-title" className="t-h2 mt-6" lines={["5.0 у обоих", "салонов"]} />
          <p className="t-lead mt-5 max-w-[40ch] text-fg-muted">Средняя оценка на Яндекс Картах, сентябрь 2026.</p>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {[salons.spa, salons.vip].map((s) => (
              <div key={s.id} className="grid grid-cols-[auto_1fr] items-center gap-x-6 py-6">
                <dt className="text-bronze font-display text-[clamp(3rem,2.2rem+2.6vw,4.75rem)] leading-none">
                  <Counter value={s.rating.value} decimals={1} className="tabular" />
                </dt>
                <dd>
                  <p className="font-display text-xl">{s.name}</p>
                  <p className="tabular text-sm text-fg-muted">
                    {s.rating.count} оценок, {s.rating.reviews} отзывов
                  </p>
                  <a
                    href={`${s.yandexUrl}reviews/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm text-brand-3 underline-offset-4 hover:underline"
                  >
                    Отзывы на Яндекс Картах
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                    <span className="sr-only">(откроется в новой вкладке)</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[min(86vw,40rem)] lg:col-span-7" aria-hidden="true">
          <div className="relative aspect-square">
            {/* паттерн 3: кольцо с текстом вращается только от скролла */}
            <ScrollRotate from={-80} to={140} className="absolute inset-0">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  <path id="ring-path" d="M200 200m-178 0a178 178 0 1 1 356 0a178 178 0 1 1-356 0" />
                  <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#b07a45" />
                    <stop offset="0.5" stopColor="#f1d3a2" />
                    <stop offset="1" stopColor="#c9955e" />
                  </linearGradient>
                </defs>
                <text className="ring-text" fontSize="18" fill="url(#ring-grad)">
                  <textPath href="#ring-path" textLength="1110" lengthAdjust="spacing">
                    {RING}
                  </textPath>
                </text>
              </svg>
            </ScrollRotate>
            <ScrollRotate from={30} to={-90} className="absolute inset-[9%]">
              <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
                <circle cx="200" cy="200" r="198" stroke="#c9955e" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 10" />
                <circle cx="200" cy="2" r="4" fill="#f1d3a2" />
              </svg>
            </ScrollRotate>
            <div className="absolute inset-[17%] overflow-hidden rounded-[58%_42%_47%_53%/52%_45%_55%_48%] border border-brand/50 shadow-[0_0_80px_-10px_rgb(201_149_94/0.35)]">
              <Image
                src={mirror}
                alt=""
                fill
                quality={75}
                sizes="(min-width: 1024px) 27rem, 58vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
