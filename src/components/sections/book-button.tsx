"use client";

import { presetBooking } from "@/components/booking/preset";
import { MagneticButton } from "@/components/motion/magnetic-button";
import type { SalonId } from "@/content/services";

/** Кнопка «Записаться» с предвыбором салона (и услуги) в форме записи */
export function BookButton({
  salon,
  service,
  label,
  size = "md",
}: {
  salon: SalonId;
  service?: string;
  label: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <MagneticButton
      size={size}
      onClick={() =>
        service ? presetBooking("service", service, "booking", { salon }) : presetBooking("salon", salon)
      }
    >
      {label}
    </MagneticButton>
  );
}
