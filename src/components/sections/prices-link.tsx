"use client";

import { ArrowDown } from "lucide-react";

import { scrollToTarget } from "@/components/motion/smooth-scroll";
import { Button } from "@/components/ui/button";
import type { CategoryId, SalonId } from "@/content/services";

export const PRICES_EVENT = "iren:prices";
export type PricesPreset = { salon: SalonId; category: CategoryId };

/** Кнопка из карточки направления: открывает прайс сразу на нужной категории */
export function PricesLink({ salon, category, label }: PricesPreset & { label: string }) {
  return (
    <Button asChild variant="outline" className="min-h-[3.25rem]">
      <a
        href="#prices"
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent<PricesPreset>(PRICES_EVENT, { detail: { salon, category } }));
          scrollToTarget("prices");
        }}
      >
        {label}
        <ArrowDown aria-hidden="true" />
      </a>
    </Button>
  );
}
