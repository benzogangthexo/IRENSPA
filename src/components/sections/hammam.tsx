import Image from "next/image";

import hammamImg from "@/assets/photos/hammam.jpg";
import spaRelax from "@/assets/photos/spa-relax.jpg";
import spaRoom from "@/assets/photos/spa-room.jpg";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Section } from "@/components/layout/section";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { hammamIncludes, hammamPrograms } from "@/content/site";
import { priceLabel, serviceById } from "@/lib/services";

import { BookButton } from "./book-button";

export function Hammam() {
  return (
    <Section id="hammam" labelledBy="hammam-title" className="isolate overflow-clip">
      {/* пар: размытые пятна плывут с разной скоростью только от скролла */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Parallax speed={0.45} className="absolute -left-[20%] top-[2%]">
          <div className="steam aspect-square w-[70vmax]" />
        </Parallax>
        <Parallax speed={-0.35} className="absolute -right-[25%] top-[30%]">
          <div className="steam steam--cool aspect-square w-[60vmax]" />
        </Parallax>
        <Parallax speed={0.2} className="absolute bottom-[-15%] left-[25%]">
          <div className="steam aspect-square w-[50vmax]" />
        </Parallax>
      </div>

      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-x-[var(--col-gap)]">
        <div className="lg:col-span-5 lg:pt-6">
          <Eyebrow index="06">Хаммам и релакс-зона</Eyebrow>
          <MaskReveal
            as="h2"
            id="hammam-title"
            className="t-h2 mt-6"
            lines={[
              <span key="a">
                Османский <em className="text-bronze italic">хаммам</em>
              </span>,
              "у Мещерского озера",
            ]}
          />
          <p className="t-lead mt-6 max-w-[40ch] text-fg-muted">
            Хаммам в Spa IREN индивидуальный: только вы и ваша компания, до четырёх гостей. После прогрева пилинг
            кессе, пенный массаж и чай.
          </p>
          <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
            {hammamIncludes.map((item) => (
              <li key={item} className="flex gap-3 border-t border-line py-3 text-[0.95rem]">
                <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <h3 className="t-eyebrow mt-10 text-fg-muted">Программы и девичники</h3>
          <dl className="mt-3 divide-y divide-line border-y border-line">
            {hammamPrograms.map((id) => {
              const s = serviceById(id);
              if (!s) return null;
              return (
                <div key={id} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="min-w-0">
                    <span className="block">{s.title}</span>
                    {s.note ? <span className="mt-0.5 block text-sm text-fg-muted">{s.note}</span> : null}
                  </dt>
                  <dd className="tabular shrink-0 text-right text-brand-3">{priceLabel(s)}</dd>
                </div>
              );
            })}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton salon="spa" service="spa-ham-girls" label="Записать девичник" />
            <BookButton salon="spa" service="spa-ham-warm" label="Хаммам на 25 минут" size="md" />
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-2xl)] bg-surface">
                <Image
                  src={hammamImg.src}
                  alt="Хаммам Spa IREN: мраморная лежанка, мягкая подсветка и тёмный камень"
                  fill
                  quality={75}
                  sizes="(min-width: 1024px) 52vw, 94vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-fg-muted">Визуализация хаммама в новом интерьере Spa IREN</figcaption>
            </figure>
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-8">
            <Parallax speed={-0.12}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-xl)] bg-surface">
                <Image
                  src={spaRoom.src}
                  alt="Спа-кабинет с массажным столом, шторами и живыми растениями"
                  fill
                  quality={75}
                  sizes="(min-width: 1024px) 26vw, 46vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
            <Parallax speed={0.12}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-xl)] bg-surface">
                <Image
                  src={spaRelax.src}
                  alt="Релакс-зона: два кресла, столик и зелень на тёмной стене"
                  fill
                  quality={75}
                  sizes="(min-width: 1024px) 26vw, 46vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </Container>
    </Section>
  );
}
