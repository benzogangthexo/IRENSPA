"use client";

import type { StaticImageData } from "next/image";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

import dirCosmo from "@/assets/photos/dir-cosmo.jpg";
import dirMassage from "@/assets/photos/dir-massage.jpg";
import dirNails from "@/assets/photos/dir-nails.jpg";
import hammam from "@/assets/photos/hammam.jpg";
import { presetBooking } from "@/components/booking/preset";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HoverImageList, type HoverImageItem } from "@/components/motion/hover-image-list";
import { Button } from "@/components/ui/button";
import { FilterChips } from "@/components/ui/filter-chips";
import { Skeleton } from "@/components/ui/skeleton";
import type { CategoryId, SalonId } from "@/content/services";
import { salons, works } from "@/content/site";
import { useResource } from "@/hooks/use-resource";
import { apiFetch } from "@/lib/api/client";
import { ServicesResponseSchema, type ServiceDTO, type ServicesResponse } from "@/lib/api/schemas";
import { CATEGORY_OPTIONS, SALON_OPTIONS, filterServices, priceLabel, priceRange } from "@/lib/services";

import { PRICES_EVENT, type PricesPreset } from "./prices-link";
import { SectionHead } from "./section-head";

const categoryImage: Record<Exclude<CategoryId, "hair">, StaticImageData> = {
  nails: dirNails,
  cosmo: dirCosmo,
  massage: dirMassage,
  hammam,
};

const imageFor = (s: ServiceDTO, i: number) =>
  s.category === "hair" ? works[i % works.length].image : categoryImage[s.category];

export const INITIAL_KEY = "spa|hair";

export function Prices({ initial }: { initial: ServicesResponse }) {
  const [salon, setSalon] = useState<SalonId>("spa");
  const [category, setCategory] = useState<CategoryId>("hair");
  const key = `${salon}|${category}`;

  const res = useResource(
    key,
    (signal) =>
      apiFetch(`/api/services?salon=${salon}&category=${category}`, { schema: ServicesResponseSchema, signal }),
    { initial: { key: INITIAL_KEY, data: initial }, isEmpty: (d) => d.items.length === 0 },
  );

  useEffect(() => {
    const onPreset = (e: Event) => {
      const { salon: s, category: c } = (e as CustomEvent<PricesPreset>).detail;
      setSalon(s);
      setCategory(c);
    };
    window.addEventListener(PRICES_EVENT, onPreset);
    return () => window.removeEventListener(PRICES_EVENT, onPreset);
  }, []);

  const items: HoverImageItem[] =
    res.data?.items.map((s, i) => ({
      id: s.id,
      title: <span className="font-display text-[1.2rem] leading-snug sm:text-[1.55rem]">{s.title}</span>,
      meta: [s.note, priceRange(s)].filter(Boolean).join(" · ") || undefined,
      aside: <span className="tabular text-brand-3 sm:text-lg">{priceLabel(s)}</span>,
      image: imageFor(s, i),
      alt: "",
      cursorLabel: "Записаться",
      onSelect: () => presetBooking("service", s.id, "booking", { salon: s.salon }),
    })) ?? [];

  const expected = Math.max(3, filterServices(salon, category).length);

  return (
    <Section id="prices" labelledBy="prices-title">
      <Container>
        <SectionHead
          index="03"
          eyebrow="Цены"
          titleId="prices-title"
          lines={["Прайс без PDF", "и звонков"]}
          lead="Выберите салон и направление. Нажмите на услугу, и она сразу окажется в форме записи."
        />
        <div className="mt-10 flex flex-col gap-3 md:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips label="Салон" options={SALON_OPTIONS} value={salon} onChange={setSalon} />
          <FilterChips label="Направление" options={CATEGORY_OPTIONS} value={category} onChange={setCategory} />
        </div>

        <div className="mt-8" aria-live="polite" aria-busy={res.status === "loading"}>
          {res.status === "loading" || res.status === "idle" ? (
            <ul className="border-t border-line" aria-label="Загружаем цены">
              {Array.from({ length: expected }, (_, i) => (
                <li key={i} className="border-b border-line">
                  <div className="flex min-h-16 w-full items-center gap-4 py-4 sm:gap-6 sm:py-5">
                    <Skeleton className="hover-thumb size-16 shrink-0 rounded-[calc(var(--radius)-4px)] sm:size-20" />
                    <span className="min-w-0 flex-1">
                      <Skeleton className="h-[1.65rem] w-[min(22rem,70%)] rounded-md sm:h-[2.1rem]" />
                      <Skeleton className="mt-1 h-[1.5rem] w-[min(16rem,50%)] rounded-md" />
                    </span>
                    <Skeleton className="h-[1.5rem] w-24 shrink-0 rounded-md sm:h-[1.75rem]" />
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {res.status === "success" ? (
            <HoverImageList items={items} previewClassName="h-[18rem] w-[14rem] rounded-[var(--radius)]" />
          ) : null}

          {res.status === "empty" ? (
            <div className="rounded-[var(--radius-xl)] border border-line bg-surface p-6 sm:p-10">
              <p className="t-h3">
                {category === "hammam" ? "Хаммам есть только в Spa IREN" : "В этом салоне такой услуги нет"}
              </p>
              <p className="mt-3 max-w-[52ch] text-fg-muted">
                {category === "hammam"
                  ? `Он на ${salons.spa.address}, у Мещерского озера. Переключимся на Spa IREN?`
                  : "Посмотрите во втором салоне сети."}
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setSalon(salon === "spa" ? "vip" : "spa")}>
                Показать {salon === "spa" ? salons.vip.name : salons.spa.name}
              </Button>
            </div>
          ) : null}

          {res.status === "error" ? (
            <div role="alert" className="rounded-[var(--radius-xl)] border border-danger/40 bg-surface p-6 sm:p-10">
              <p className="t-h3">Прайс не загрузился</p>
              <p className="mt-3 text-fg-muted">{res.error?.message ?? "Проверьте связь и попробуйте ещё раз."}</p>
              <Button className="mt-6" variant="outline" onClick={res.retry}>
                <RotateCcw aria-hidden="true" />
                Повторить
              </Button>
            </div>
          ) : null}
        </div>
        <p className="mt-6 max-w-[70ch] text-sm text-fg-muted">
          Цены из онлайн-записи салонов (YClients), сентябрь 2026. Разброс зависит от длины волос и уровня мастера:
          стилист, топ-стилист, арт-директор. Точную сумму назовёт мастер на консультации.
        </p>
      </Container>
    </Section>
  );
}
