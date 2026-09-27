import Image from "next/image";
import type { CSSProperties } from "react";

import heroSpa from "@/assets/photos/hero-spa.jpg";
import heroVip from "@/assets/photos/hero-vip.jpg";
import { Container } from "@/components/layout/container";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Parallax } from "@/components/motion/parallax";
import { Button } from "@/components/ui/button";
import { salons } from "@/content/site";

const d = (s: string) => ({ "--d": s }) as CSSProperties;

const panels = [
  {
    salon: salons.spa,
    image: heroSpa,
    alt: "Спа-кабинет Spa IREN: тёмное дерево, шторы, тёплая бронзовая подсветка",
    speed: 0.3,
    tags: "хаммам, массаж, спа-программы",
  },
  {
    salon: salons.vip,
    image: heroVip,
    alt: "Портрет гостьи VIP IREN с медными волнами после окрашивания",
    speed: 0.12,
    tags: "цвет, косметология, ногти",
  },
];

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate overflow-x-clip">
      {/* дальний план: бронзовое свечение */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[25%] -top-[30%] aspect-square w-[95vmax] rounded-full bg-[radial-gradient(closest-side,rgb(201_149_94/0.13),transparent)]" />
        <div className="absolute -bottom-[35%] -left-[30%] aspect-square w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(138_90_52/0.14),transparent)]" />
      </div>


      <Container className="grid gap-y-10 pb-12 pt-4 sm:pt-8 lg:grid-cols-12 lg:gap-x-[var(--col-gap)] lg:pb-16 lg:pt-6">
        <div className="flex flex-col lg:col-span-6 lg:pt-10">
          <p className="t-eyebrow fade-immediate text-fg-muted" style={d("0.05s")}>
            Нижний Новгород · два салона сети IREN
          </p>
          <MaskReveal
            as="h1"
            id="hero-title"
            immediate
            className="t-hero hero-title mt-5 sm:mt-7"
            lines={[
              <span key="a">
                <em className="text-bronze pr-[0.05em] italic">Хаммам</em> у озера,
              </span>,
              <span key="b">
                <em className="text-bronze pr-[0.05em] italic">цвет</em> и уход
              </span>,
              "в центре города",
            ]}
          />
          <p className="t-lead fade-immediate mt-6 max-w-[34ch] text-fg-muted sm:mt-8" style={d("0.45s")}>
            Spa IREN у Мещерского озера, на Карла Маркса, 32, и VIP IREN на Варварской, 8/22. У обоих салонов 5,0 на Яндекс Картах.
          </p>
          <div className="fade-immediate mt-7 flex flex-wrap items-center gap-3 sm:mt-9" style={d("0.55s")}>
            <MagneticButton asChild size="lg">
              <a href="#booking">Записаться онлайн</a>
            </MagneticButton>
            <Button asChild variant="outline" size="lg">
              <a href="#prices">Цены</a>
            </Button>
          </div>
          <dl className="fade-immediate mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-6 lg:mt-auto" style={d("0.7s")}>
            {[salons.spa, salons.vip].map((s) => (
              <div key={s.id}>
                <dt className="text-sm text-fg-muted">{s.name}</dt>
                <dd className="mt-1 flex items-baseline gap-2">
                  <span className="text-bronze font-display text-3xl leading-none">5,0</span>
                  <span className="tabular text-sm text-fg-muted">{s.rating.count} оценок</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="split flex flex-col gap-5 sm:flex-row lg:col-span-6 lg:h-[min(calc(100svh-var(--header-h)-3rem),820px)] lg:min-h-[34rem] lg:gap-6">
          {panels.map((p, i) => (
            <div key={p.salon.id} className="fade-immediate relative" style={d(`${0.35 + i * 0.12}s`)}>
              <a
                href={`#salon-${p.salon.id}`}
                className="arch group relative block aspect-[4/3] overflow-hidden bg-surface sm:aspect-[3/4] lg:aspect-auto lg:h-full"
                data-cursor="view"
                data-cursor-label={p.salon.name}
              >
                {/* средний план: фото отстаёт от скролла с разной скоростью */}
                <Parallax speed={p.speed} className="absolute inset-x-0 -bottom-[9vh] -top-[9vh]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    preload
                    quality={75}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="split__img object-cover"
                  />
                </Parallax>
                <span aria-hidden="true" className="photo-veil absolute inset-0" />
                <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="flex items-baseline">
                    <span className="mr-2 font-hand text-[2rem] leading-none text-brand-3">{p.salon.hand}</span>
                    <span className="font-display text-2xl leading-none tracking-[0.16em]">IREN</span>
                  </span>
                  <span className="mt-2 block text-sm text-fg/85">{p.salon.address}</span>
                  <span className="block text-sm text-fg/70">{p.tags}</span>
                </span>
              </a>
              {/* ближний план: бронзовая рамка-зеркало обгоняет скролл */}
              <Parallax speed={-0.22} className="pointer-events-none absolute -inset-2 sm:-inset-2.5">
                <span aria-hidden="true" className="arch block h-full w-full border border-brand/45" />
              </Parallax>
            </div>
          ))}
        </div>
      </Container>

      {/* дальний план: пар и тонкие дуги-чертежи за контентом */}
      <Parallax speed={0.35} className="pointer-events-none absolute inset-x-0 bottom-0 top-[30%] -z-10">
        <div aria-hidden="true" className="relative h-full w-full">
          <div className="steam absolute -left-[12%] bottom-[0%] aspect-square w-[55vmax]" />
          <div className="steam steam--cool absolute -bottom-[25%] right-[-12%] aspect-square w-[45vmax]" />
          <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-50" fill="none">
            <defs>
              <linearGradient id="hero-arc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8a5a34" stopOpacity="0" />
                <stop offset="0.45" stopColor="#d8a76b" />
                <stop offset="1" stopColor="#f1d3a2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M-40 640C260 420 560 360 820 420s460 180 680 40" stroke="url(#hero-arc)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d="M120 720c180-260 470-420 820-400 250 14 420 120 560 260" stroke="url(#hero-arc)" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
          </svg>
        </div>
      </Parallax>
    </section>
  );
}
