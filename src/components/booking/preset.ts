import { scrollToTarget } from "@/components/motion/smooth-scroll";

export const BOOKING_EVENT = "booking:preset";
export type BookingPreset = { stepId: string; optionId: string; also?: Record<string, string> };

/** Предвыбрать вариант в записи (услуга, салон, гости) и доскроллить к #booking */
export function presetBooking(stepId: string, optionId: string, targetId = "booking", also?: Record<string, string>) {
  window.dispatchEvent(new CustomEvent<BookingPreset>(BOOKING_EVENT, { detail: { stepId, optionId, also } }));
  scrollToTarget(targetId);
}
