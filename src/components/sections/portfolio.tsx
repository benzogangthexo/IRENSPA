"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { salons, works } from "@/content/site";

import { SectionHead } from "./section-head";

export function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : works[open];
  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + works.length) % works.length));

  return (
    <Section id="portfolio" labelledBy="portfolio-title">
      <Container>
        <SectionHead
          index="04"
          eyebrow="Портфолио"
          titleId="portfolio-title"
          lines={["Цвет", "крупным планом"]}
          lead="Работы колористов Spa IREN и VIP IREN. Нажмите на фото, чтобы рассмотреть."
        />
        <ul className="mosaic mt-12 md:mt-16">
          {works.map((w, i) => (
            <li key={w.id}>
              <Reveal delay={(i % 3) * 0.08} y={32}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Открыть фото: ${w.caption}, ${salons[w.salon].name}`}
                  data-cursor="view"
                  data-cursor-label="Смотреть"
                  className="group relative block w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface"
                >
                  <Image
                    src={w.image}
                    alt={w.alt}
                    quality={75}
                    sizes="(min-width: 1440px) 440px, (min-width: 768px) 31vw, 47vw"
                    placeholder="blur"
                    className="h-auto w-full transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden items-end justify-between gap-3 bg-gradient-to-t from-bg/85 via-bg/30 to-transparent p-4 pt-12 text-left text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
                    <span>{w.caption}</span>
                    <span className="shrink-0 text-fg-muted">{salons[w.salon].name}</span>
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>

      <Dialog open={current !== null} onOpenChange={(o) => (o ? null : setOpen(null))}>
        <DialogContent
          className="w-[min(94vw,62rem)] max-w-none border-line bg-bg-2 p-3 sm:p-4"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {current ? (
            <div className="grid gap-3 sm:gap-4">
              <div className="relative h-[min(72svh,48rem)] w-full overflow-hidden rounded-[var(--radius)] bg-surface">
                <Image
                  key={current.id}
                  src={current.image}
                  alt={current.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 60rem, 94vw"
                  placeholder="blur"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1">
                <div className="min-w-0">
                  <DialogTitle className="font-display text-xl leading-tight sm:text-2xl">{current.caption}</DialogTitle>
                  <DialogDescription className="mt-1 text-sm text-fg-muted">
                    {salons[current.salon].name} · <span className="tabular">{(open ?? 0) + 1} / {works.length}</span>
                  </DialogDescription>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Предыдущее фото"
                    className="grid size-11 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg"
                  >
                    <ChevronLeft aria-hidden="true" className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Следующее фото"
                    className="grid size-11 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg"
                  >
                    <ChevronRight aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
