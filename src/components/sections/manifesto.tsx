import Image from "next/image";

import manifestRing from "@/assets/photos/manifest-ring.jpg";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Section } from "@/components/layout/section";
import { Counter } from "@/components/motion/counter";
import { DrawOnScroll } from "@/components/motion/draw-path";
import { GrowMedia } from "@/components/motion/grow-media";
import { WordReveal } from "@/components/motion/word-reveal";

const TEXT =
  "IREN работает в Нижнем Новгороде с 90-х. Сейчас у сети два салона: Spa IREN у Мещерского озера, с хаммамом и спа-зоной, и VIP IREN на Варварской, три этажа в пяти минутах от Кремля.";

const stats = [
  { value: 400, suffix: " м²", label: "в Spa IREN: хаммам, релакс-зона, студии волос и ногтей" },
  { value: 500, suffix: " м²", label: "в VIP IREN: три этажа и отдельные кабинеты" },
  { text: "4-6", suffix: " рук", label: "маникюр и педикюр одновременно" },
  { value: 5, decimals: 1, label: "оценка обоих салонов на Яндекс Картах" },
];

export function Manifesto() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-surface px-5 py-14 sm:px-10 md:px-16 md:py-24">
          <DrawOnScroll className="pointer-events-none absolute inset-0" offset={["start 0.9", "end 0.4"]}>
            <svg aria-hidden="true" viewBox="0 0 1200 700" preserveAspectRatio="xMaxYMid slice" className="h-full w-full" fill="none">
              <g stroke="#c9955e" strokeOpacity="0.28" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <path data-draw pathLength={1} d="M1210 90C1010 90 900 200 900 350s110 260 310 260" />
                <path data-draw pathLength={1} d="M1210 150C1060 150 970 240 970 350s90 200 240 200" />
                <path data-draw pathLength={1} d="M860 350h350" />
                <path data-draw pathLength={1} d="M1040 40v620" />
              </g>
            </svg>
          </DrawOnScroll>
          <Eyebrow index="01" className="relative">
            Сеть IREN
          </Eyebrow>
          <h2 id="about-title" className="sr-only">
            О сети салонов IREN
          </h2>
          <WordReveal
            as="p"
            text={TEXT}
            accent={[5, 6, 12, 13, 22, 23]}
            accentClassName="text-bronze italic"
            className="relative mt-8 max-w-[25ch] font-display text-[clamp(1.6rem,1.05rem+2.75vw,4rem)] leading-[1.1] tracking-[-0.01em] md:mt-12"
          />
          <dl className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-8 md:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[clamp(2.1rem,1.6rem+1.6vw,3.4rem)] leading-none">
                  {"text" in s ? (
                    <span className="tabular">{s.text}</span>
                  ) : (
                    <Counter value={s.value ?? 0} decimals={s.decimals ?? 0} className="tabular" />
                  )}
                  {s.suffix ? <span className="text-bronze text-[0.55em]">{s.suffix}</span> : null}
                </dt>
                <dd className="mt-3 max-w-[26ch] text-sm leading-relaxed text-fg-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mt-5 md:mt-8">
          <GrowMedia from={0.8} className="aspect-[4/3] rounded-[var(--radius-2xl)] bg-surface sm:aspect-[16/9]">
            <Image
              src={manifestRing}
              alt="Гостья у кольцевой лампы, длинные волосы после окрашивания в тёплый медный"
              fill
              quality={75}
              sizes="(min-width: 1440px) 1344px, 94vw"
              placeholder="blur"
              className="object-cover"
            />
          </GrowMedia>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-sm text-fg-muted">
            <span>Окрашивание в Spa IREN</span>
            <span>Карла Маркса, 32</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
