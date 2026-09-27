import { PHONE_MAIN, salons } from "@/content/site";
import { services } from "@/content/services";
import type { BookingConfig, Week } from "@/lib/booking";
import { CATEGORY_OPTIONS, priceLabel } from "@/lib/services";

/* Часы салонов (0 = воскресенье): Spa Пн-Сб 9-21, Вс 10-20; VIP Пн-Сб 9-21, Вс 10-19 */
const day = (open: string, close: string) => ({ open, close });
const SPA_WEEK: Week = [
  day("10:00", "20:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
];
const VIP_WEEK: Week = [
  day("10:00", "19:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
  day("09:00", "21:00"),
];

export const bookingConfig: BookingConfig = {
  codePrefix: "IR",
  timeZone: "Europe/Moscow",
  slotMinutes: 30,
  leadMinutes: 90,
  lastSlotBeforeClose: 60,
  daysAhead: 14,
  busyShare: 0.32,
  /* общий график по самым широким часам; конкретный салон проверяется в /api/slots */
  week: SPA_WEEK,
  scopeStep: "salon",
  scopes: { spa: SPA_WEEK, vip: VIP_WEEK },
  steps: [
    {
      id: "salon",
      title: "Салон",
      columns: 1,
      options: [
        {
          id: "spa",
          label: salons.spa.name,
          note: `${salons.spa.address}. Хаммам, массаж, волосы, ногти`,
          badge: "Пн-Сб 9-21, Вс 10-20",
        },
        {
          id: "vip",
          label: salons.vip.name,
          note: `${salons.vip.address}. Цвет, косметология, ногти`,
          badge: "Пн-Сб 9-21, Вс 10-19",
        },
      ],
    },
    {
      id: "service",
      title: "Услуга",
      hint: "Цена «от»: итог зависит от длины волос и уровня мастера.",
      groups: CATEGORY_OPTIONS,
      options: services.map((s) => ({
        id: s.id,
        label: s.title,
        note: s.note,
        price: priceLabel(s),
        group: s.category,
        scopes: [s.salon],
      })),
    },
  ],
  phone: PHONE_MAIN.display,
};
