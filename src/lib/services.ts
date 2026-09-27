import { services, type CategoryId, type SalonId, type Service } from "@/content/services";

/* Общий фильтр прайса: им пользуются роут /api/services и клиент (скелетон той же длины) */

export const SALON_OPTIONS: { id: SalonId; label: string }[] = [
  { id: "spa", label: "Spa IREN" },
  { id: "vip", label: "VIP IREN" },
];

export const CATEGORY_OPTIONS: { id: CategoryId; label: string }[] = [
  { id: "hair", label: "Волосы" },
  { id: "nails", label: "Ногти" },
  { id: "cosmo", label: "Косметология" },
  { id: "massage", label: "Массаж" },
  { id: "hammam", label: "Хаммам" },
];

export const SALON_IDS = SALON_OPTIONS.map((s) => s.id) as [SalonId, ...SalonId[]];
export const CATEGORY_IDS = CATEGORY_OPTIONS.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export function filterServices(salon: SalonId, category?: CategoryId): Service[] {
  return services.filter((s) => s.salon === salon && (!category || s.category === category));
}

export const serviceById = (id: string) => services.find((s) => s.id === id);

/** 3 000 с неразрывным пробелом: одинаково на сервере и в браузере */
export const rub = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;

export function priceLabel(s: Pick<Service, "from" | "to" | "unit">) {
  const base = s.to && s.to !== s.from ? `от ${rub(s.from)}` : rub(s.from);
  return s.unit ? `${base} ${s.unit}` : base;
}

export function priceRange(s: Pick<Service, "from" | "to">) {
  return s.to && s.to !== s.from ? `до ${rub(s.to)}` : undefined;
}
