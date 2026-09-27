/* Прайс: только реальные цены из онлайн-записи YClients салонов (выгрузка сентября 2026).
   Spa IREN = филиал 84468 (К. Маркса, 32), VIP IREN = филиал 339238 (Варварская, 8/22).
   from/to: разброс по уровню мастера и длине волос. */

export type SalonId = "spa" | "vip";
export type CategoryId = "hair" | "nails" | "cosmo" | "massage" | "hammam";

export type Service = {
  id: string;
  salon: SalonId;
  category: CategoryId;
  title: string;
  note?: string;
  from: number;
  to?: number;
  unit?: string;
};

const LEVELS = "стилист, топ-стилист или арт-директор";

export const services: Service[] = [
  // Spa IREN: волосы
  { id: "spa-hair-cut", salon: "spa", category: "hair", title: "Женская стрижка с уходом", from: 2200, to: 3600 },
  { id: "spa-hair-tone", salon: "spa", category: "hair", title: "Окрашивание тон в тон", note: LEVELS, from: 3000, to: 15400 },
  { id: "spa-hair-contour", salon: "spa", category: "hair", title: "Контуринг", note: LEVELS, from: 2400, to: 6800 },
  { id: "spa-hair-balayage", salon: "spa", category: "hair", title: "Мелирование, балаяж", note: LEVELS, from: 6000, to: 16500 },
  { id: "spa-hair-blond", salon: "spa", category: "hair", title: "Total blonde", note: LEVELS, from: 6600, to: 20400 },
  { id: "spa-hair-dark", salon: "spa", category: "hair", title: "Выход из тёмного", note: "VIP-стилист или арт-директор", from: 15000, to: 28000 },
  { id: "spa-hair-airtouch", salon: "spa", category: "hair", title: "Airtouch", note: LEVELS, from: 15600, to: 28800 },
  // Spa IREN: ногти
  { id: "spa-nail-mani", salon: "spa", category: "nails", title: "Женский маникюр", from: 1200, to: 1400 },
  { id: "spa-nail-gel", salon: "spa", category: "nails", title: "Маникюр и гель-лак", from: 2500, to: 2700 },
  { id: "spa-nail-french", salon: "spa", category: "nails", title: "Маникюр, гель-лак, френч", from: 2800, to: 3000 },
  { id: "spa-nail-ext", salon: "spa", category: "nails", title: "Наращивание ногтей", from: 3500, to: 4000 },
  { id: "spa-nail-pedi", salon: "spa", category: "nails", title: "Женский педикюр", from: 2400, to: 2600 },
  { id: "spa-nail-pedi-gel", salon: "spa", category: "nails", title: "Педикюр и гель-лак", from: 3000, to: 3300 },
  { id: "spa-nail-med", salon: "spa", category: "nails", title: "Медицинский педикюр", from: 3200, to: 3400 },
  // Spa IREN: косметология
  { id: "spa-cos-clean", salon: "spa", category: "cosmo", title: "Атравматическая чистка лица", from: 2800, to: 3500 },
  { id: "spa-cos-us", salon: "spa", category: "cosmo", title: "Ультразвуковая чистка лица", from: 3100, to: 4100 },
  { id: "spa-cos-face", salon: "spa", category: "cosmo", title: "Классический массаж лица", from: 2000, to: 2300 },
  { id: "spa-cos-buccal", salon: "spa", category: "cosmo", title: "Буккальный массаж лица", note: "40 минут", from: 2800 },
  { id: "spa-cos-myo", salon: "spa", category: "cosmo", title: "Миофасциальный массаж лица", from: 3000 },
  { id: "spa-cos-starvac", salon: "spa", category: "cosmo", title: "Вакуумно-роликовый массаж Starvac", note: "60 минут", from: 2800 },
  // Spa IREN: массаж
  { id: "spa-mas-60", salon: "spa", category: "massage", title: "Массаж SPA IREN", note: "60 минут", from: 2300, to: 3500 },
  { id: "spa-mas-90", salon: "spa", category: "massage", title: "Массаж SPA IREN", note: "90 минут", from: 3000, to: 4500 },
  { id: "spa-mas-bali", salon: "spa", category: "massage", title: "Балийский массаж", note: "80 минут", from: 4300, to: 4900 },
  { id: "spa-mas-4h", salon: "spa", category: "massage", title: "Классический массаж в 4 руки", note: "60 минут, два мастера", from: 3500 },
  { id: "spa-mas-royal", salon: "spa", category: "massage", title: "Королевский массаж в 4 руки", note: "90 минут, два мастера", from: 4200 },
  { id: "spa-mas-foot", salon: "spa", category: "massage", title: "Тайский foot-массаж", note: "40 минут", from: 1800, to: 2400 },
  { id: "spa-mas-pair", salon: "spa", category: "massage", title: "Парный массаж", note: "60 минут, для двоих", from: 5000, to: 6000 },
  // Spa IREN: хаммам и программы
  { id: "spa-ham-warm", salon: "spa", category: "hammam", title: "Прогрев в индивидуальном хаммаме", note: "25 минут, до 4 гостей", from: 1300, to: 2000 },
  { id: "spa-ham-renew", salon: "spa", category: "hammam", title: "Программа «Обновление»", note: "60 минут: прогрев, пилинг, чай", from: 3500, to: 7500 },
  { id: "spa-ham-restore", salon: "spa", category: "hammam", title: "Программа «Восстановление»", note: "100 минут: прогрев, пилинг, обёртывание или пенный массаж, чай", from: 4500, to: 8500 },
  { id: "spa-ham-tale", salon: "spa", category: "hammam", title: "Программа «Турецкая сказка»", note: "120 минут: прогрев, пилинг, обёртывание, пенный массаж, чай", from: 5500, to: 9500 },
  { id: "spa-ham-girls", salon: "spa", category: "hammam", title: "SPA-девичник", note: "двое гостей, один мастер", from: 9000, unit: "за двоих" },
  { id: "spa-ham-party", salon: "spa", category: "hammam", title: "Девичник для компании", note: "от 2 до 5 гостей", from: 5000, unit: "с гостя" },
  { id: "spa-ham-date", salon: "spa", category: "hammam", title: "«Романтическое свидание»", note: "двое гостей, хаммам, массаж, чай", from: 7000, unit: "за двоих" },

  // VIP IREN: волосы
  { id: "vip-hair-cut", salon: "vip", category: "hair", title: "Женская стрижка", from: 3100, to: 5300 },
  { id: "vip-hair-color", salon: "vip", category: "hair", title: "Окрашивание", note: "VIP-стилист, топ-стилист или арт-директор", from: 5400, to: 20000 },
  { id: "vip-hair-tone", salon: "vip", category: "hair", title: "Тонирование", from: 4100 },
  { id: "vip-hair-contour", salon: "vip", category: "hair", title: "Контуринг", from: 5000, to: 11000 },
  { id: "vip-hair-blond", salon: "vip", category: "hair", title: "Total blonde", from: 8100, to: 27000 },
  { id: "vip-hair-balayage", salon: "vip", category: "hair", title: "Балаяж, шатуш", from: 10800, to: 30000 },
  { id: "vip-hair-airtouch", salon: "vip", category: "hair", title: "Airtouch", from: 17600, to: 37800 },
  { id: "vip-hair-black", salon: "vip", category: "hair", title: "Выход из чёрного", from: 20800, to: 42000 },
  // VIP IREN: ногти
  { id: "vip-nail-mani", salon: "vip", category: "nails", title: "Женский маникюр", from: 1700 },
  { id: "vip-nail-gel", salon: "vip", category: "nails", title: "Маникюр и гель-лак", from: 2700 },
  { id: "vip-nail-author", salon: "vip", category: "nails", title: "Авторский маникюр и спа-уход", from: 2900 },
  { id: "vip-nail-french", salon: "vip", category: "nails", title: "Маникюр и френч", from: 3400 },
  { id: "vip-nail-pedi", salon: "vip", category: "nails", title: "Педикюр", note: "комбинированный или пилочный", from: 2700 },
  { id: "vip-nail-pedi-gel", salon: "vip", category: "nails", title: "Педикюр и гель-лак", from: 3600 },
  // VIP IREN: косметология
  { id: "vip-cos-atr", salon: "vip", category: "cosmo", title: "Атравматическая чистка", from: 3000 },
  { id: "vip-cos-clean", salon: "vip", category: "cosmo", title: "Чистка лица", from: 4800 },
  { id: "vip-cos-peel", salon: "vip", category: "cosmo", title: "Пилинги Mandelac", from: 4800, to: 6800 },
  { id: "vip-cos-laser", salon: "vip", category: "cosmo", title: "Лазерная эпиляция", note: "от малой зоны до ног полностью", from: 1300, to: 6800 },
  { id: "vip-cos-meso", salon: "vip", category: "cosmo", title: "Мезотерапия", note: "врачебная косметология", from: 5500, to: 8600 },
  { id: "vip-cos-liftera", salon: "vip", category: "cosmo", title: "SMAS-лифтинг на аппарате Liftera-A", note: "цена зависит от зоны", from: 9990 },
  { id: "vip-cos-ipl", salon: "vip", category: "cosmo", title: "IPL-омоложение лица, Quanta System", from: 20000 },
  // VIP IREN: массаж
  { id: "vip-mas-60", salon: "vip", category: "massage", title: "Массаж", note: "1 час", from: 3200 },
  { id: "vip-mas-90", salon: "vip", category: "massage", title: "Массаж", note: "1,5 часа", from: 4700 },
  { id: "vip-mas-120", salon: "vip", category: "massage", title: "Массаж", note: "2 часа", from: 6000 },
  { id: "vip-mas-4h", salon: "vip", category: "massage", title: "Классический массаж в 4 руки", note: "60 минут, два мастера", from: 3500 },
  { id: "vip-mas-royal", salon: "vip", category: "massage", title: "Королевский массаж в 4 руки", note: "90 минут, два мастера", from: 4200 },
  { id: "vip-mas-styx", salon: "vip", category: "massage", title: "Обёртывание STYX", from: 6000 },
];
