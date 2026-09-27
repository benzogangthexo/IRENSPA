import type { StaticImageData } from "next/image";

import dirCosmo from "@/assets/photos/dir-cosmo.jpg";
import dirHair from "@/assets/photos/dir-hair.jpg";
import dirHammam from "@/assets/photos/dir-hammam.jpg";
import dirMassage from "@/assets/photos/dir-massage.jpg";
import dirNails from "@/assets/photos/dir-nails.jpg";
import salonSpa from "@/assets/photos/salon-spa.jpg";
import salonVip from "@/assets/photos/salon-vip.jpg";
import work02 from "@/assets/photos/work-02.jpg";
import work03 from "@/assets/photos/work-03.jpg";
import work04 from "@/assets/photos/work-04.jpg";
import work05 from "@/assets/photos/work-05.jpg";
import work06 from "@/assets/photos/work-06.jpg";
import work07 from "@/assets/photos/work-07.jpg";
import work08 from "@/assets/photos/work-08.jpg";
import work09 from "@/assets/photos/work-09.jpg";
import work10 from "@/assets/photos/work-10.jpg";
import type { CategoryId, SalonId } from "@/content/services";

/* Все факты: Яндекс Карты (карточки организаций), YClients (онлайн-запись), сообщество ВК, бриф */

export type Phone = { display: string; tel: string };

export const PHONE_MAIN: Phone = { display: "+7 (953) 415-15-08", tel: "+79534151508" };

export type Salon = {
  id: SalonId;
  hand: string;
  name: string;
  address: string;
  area: string;
  phone: Phone;
  hours: { days: string; time: string }[];
  rating: { value: number; count: number; reviews: number };
  geo: { lat: number; lon: number };
  yandexUrl: string;
  routeUrl: string;
  yclientsUrl: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
  summary: string;
  features: string[];
};

export const salons: Record<SalonId, Salon> = {
  spa: {
    id: "spa",
    hand: "Spa",
    name: "Spa IREN",
    address: "ул. Карла Маркса, 32",
    area: "Канавинский район, у Мещерского озера",
    phone: { display: "+7 (953) 415-93-92", tel: "+79534159392" },
    hours: [
      { days: "Пн-Сб", time: "9:00-21:00" },
      { days: "Вс", time: "10:00-20:00" },
    ],
    rating: { value: 5, count: 726, reviews: 376 },
    geo: { lat: 56.341982, lon: 43.941943 },
    yandexUrl: "https://yandex.ru/maps/org/spa_iren/209039784813/",
    routeUrl: "https://yandex.ru/maps/?rtext=~56.341982%2C43.941943&rtt=auto",
    yclientsUrl: "https://yc.gl/book/84468",
    image: salonSpa,
    imageAlt: "Ресепшен Spa IREN: светлая стойка, полки с уходом, тёплая подсветка",
    summary: "Флагман сети: около 400 м², релакс-зона с хаммамом, Hair и Nail студии.",
    features: ["Хаммам", "Массаж в 4 руки", "Спа для двоих", "Парковка"],
  },
  vip: {
    id: "vip",
    hand: "Vip",
    name: "VIP IREN",
    address: "ул. Варварская, 8/22",
    area: "Центр, угол с Пискунова, 5 минут от Кремля",
    phone: { display: "+7 (953) 415-84-98", tel: "+79534158498" },
    hours: [
      { days: "Пн-Сб", time: "9:00-21:00" },
      { days: "Вс", time: "10:00-19:00" },
    ],
    rating: { value: 5, count: 327, reviews: 197 },
    geo: { lat: 56.324711, lon: 44.009382 },
    yandexUrl: "https://yandex.ru/maps/org/vip_iren/1264153834/",
    routeUrl: "https://yandex.ru/maps/?rtext=~56.324711%2C44.009382&rtt=auto",
    yclientsUrl: "https://yc.gl/book/339238",
    image: salonVip,
    imageAlt: "Вход в VIP IREN: бронзовые буквы IREN на тёмном фасаде",
    imagePosition: "50% 12%",
    summary: "Три этажа и 500 м²: VIP-кабинеты для волос, врачебная и аппаратная косметология.",
    features: ["Сложные окрашивания", "Лазерная эпиляция", "Quanta System", "Liftera-A"],
  },
};

export const SOCIAL = {
  vk: "https://vk.com/vipiren_ru",
  telegram: "https://t.me/iren_beauty_nn",
  whatsapp: "https://wa.me/79534158498",
};

export const NAV = [
  { href: "#services", label: "Направления" },
  { href: "#prices", label: "Цены" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#hammam", label: "Хаммам" },
  { href: "#salons", label: "Адреса" },
];

export type Direction = {
  id: string;
  category: CategoryId;
  title: string;
  text: string;
  prices: { label: string; serviceId: string }[];
  salons: SalonId[];
  image: StaticImageData;
  alt: string;
};

export const directions: Direction[] = [
  {
    id: "hair",
    category: "hair",
    title: "Волосы и сложный цвет",
    text: "Airtouch, total blonde, балаяж, выход из тёмного. Три уровня мастеров: стилист, топ-стилист, арт-директор.",
    prices: [
      { label: "Окрашивание", serviceId: "spa-hair-tone" },
      { label: "Окрашивание", serviceId: "vip-hair-color" },
      { label: "Airtouch", serviceId: "spa-hair-airtouch" },
    ],
    salons: ["spa", "vip"],
    image: dirHair,
    alt: "Длинные медные волны после окрашивания, девушка в профиль",
  },
  {
    id: "nails",
    category: "nails",
    title: "Ногти в 4 и 6 рук",
    text: "Маникюр и педикюр одновременно: над вами работают два или три мастера, и визит короче.",
    prices: [
      { label: "Маникюр", serviceId: "spa-nail-mani" },
      { label: "Маникюр и гель-лак", serviceId: "spa-nail-gel" },
      { label: "Педикюр", serviceId: "spa-nail-pedi" },
    ],
    salons: ["spa", "vip"],
    image: dirNails,
    alt: "Миндальные ногти нежно-розового цвета на фоне блестящей ткани",
  },
  {
    id: "cosmo",
    category: "cosmo",
    title: "Косметология",
    text: "Чистки и массаж лица в обоих салонах. В VIP IREN ещё врачебная косметология, лазер, Quanta System и Liftera-A.",
    prices: [
      { label: "Чистка лица", serviceId: "spa-cos-clean" },
      { label: "Лазерная эпиляция", serviceId: "vip-cos-laser" },
      { label: "SMAS-лифтинг Liftera-A", serviceId: "vip-cos-liftera" },
    ],
    salons: ["spa", "vip"],
    image: dirCosmo,
    alt: "Кабинет косметолога в VIP IREN: кресло и аппараты",
  },
  {
    id: "massage",
    category: "massage",
    title: "Массаж и спа-уход",
    text: "Массаж по телу от часа до двух, балийский, тайский foot-массаж, массаж в 4 руки и парный массаж.",
    prices: [
      { label: "Массаж SPA IREN, 60 мин", serviceId: "spa-mas-60" },
      { label: "В 4 руки, 60 мин", serviceId: "spa-mas-4h" },
      { label: "Балийский, 80 мин", serviceId: "spa-mas-bali" },
    ],
    salons: ["spa", "vip"],
    image: dirMassage,
    alt: "Мастер делает массаж шеи гостье в белом халате",
  },
  {
    id: "hammam",
    category: "hammam",
    title: "Хаммам и девичник",
    text: "Индивидуальный хаммам до 4 гостей, пилинг рукавицей кессе, пенный массаж и чай. Программы для двоих и для компании.",
    prices: [
      { label: "Прогрев, 25 мин", serviceId: "spa-ham-warm" },
      { label: "«Обновление», 60 мин", serviceId: "spa-ham-renew" },
      { label: "SPA-девичник", serviceId: "spa-ham-girls" },
    ],
    salons: ["spa"],
    image: dirHammam,
    alt: "Коридор спа-зоны: тёмное дерево и зеркало с надписью Spa",
  },
];

export type Work = { id: string; image: StaticImageData; alt: string; caption: string; salon: SalonId };

export const works: Work[] = [
  { id: "w9", image: work09, alt: "Длинные медные волосы с растяжкой цвета, вид со спины", caption: "Медь с растяжкой", salon: "spa" },
  { id: "w4", image: work04, alt: "Пепельные пряди на русых волнах", caption: "Холодные пряди на русом", salon: "vip" },
  { id: "w3", image: work03, alt: "Пепельно-русые волны с чёлкой", caption: "Пепельно-русый с чёлкой", salon: "vip" },
  { id: "w2", image: work02, alt: "Девушка с медными волнами до плеч", caption: "Медные волны", salon: "vip" },
  { id: "w5", image: work05, alt: "Светлый блонд крупными волнами, вид со спины", caption: "Светлый блонд, крупные волны", salon: "vip" },
  { id: "w10", image: work10, alt: "Ровный холодный блонд на длинных волосах, вид со спины", caption: "Холодный блонд", salon: "vip" },
  { id: "w8", image: work08, alt: "Кудрявые волосы в золотом блонде", caption: "Кудри в золотом блонде", salon: "spa" },
  { id: "w7", image: work07, alt: "Платиновый блонд, волосы в движении", caption: "Платиновый блонд", salon: "spa" },
  { id: "w6", image: work06, alt: "Рыжие кудри, собранные наверх", caption: "Рыжий на кудрях", salon: "spa" },
];

export type Review = { id: string; name: string; salon: SalonId; date: string; text: string };

/* Отзывы с Яндекс Карт: сокращены, опечатки поправлены, смысл не менялся */
export const reviews: Review[] = [
  {
    id: "r1",
    name: "Наталья П.",
    salon: "vip",
    date: "апрель 2024",
    text: "Записалась на тотал блонд после неудачного окрашивания в другом салоне. Ольга Белова исправила чужую работу и вывела чистый блонд краской, потому что на порошок у меня аллергия.",
  },
  {
    id: "r2",
    name: "Юлия А.",
    salon: "spa",
    date: "январь 2025",
    text: "Первый раз пришла на спа-программу «На острове Бали»: прогрев в хаммаме, шоколадное обёртывание и потрясающий массаж от мастера Мариам. Прекрасное начало дня.",
  },
  {
    id: "r3",
    name: "Елизавета О.",
    salon: "vip",
    date: "сентябрь 2026",
    text: "Спасибо Елене Колотилкиной за спасённые волосы. После неудачного окрашивания я уже потеряла надежду, а результат оказался выше всех моих представлений.",
  },
  {
    id: "r4",
    name: "Маргарита К.",
    salon: "spa",
    date: "ноябрь 2025",
    text: "Были на спа-программе «Девичник». Всё сделано с заботой, особенно массаж: чувствуется, как бережно мастер относится к своему делу. Спасибо Мариам!",
  },
  {
    id: "r5",
    name: "Владислав М.",
    salon: "vip",
    date: "сентябрь 2024",
    text: "Три этажа красоты с лёгким флёром роскоши. Мастер Ольга сделала нейтральное мелирование, которое идеально подошло к моему основному цвету.",
  },
  {
    id: "r6",
    name: "Татьяна К.",
    salon: "spa",
    date: "май 2025",
    text: "Ходила на массаж и на airtouch к мастеру Ксении. Очень качественная работа, через год вернулась к ней и повторила.",
  },
  {
    id: "r7",
    name: "Мария",
    salon: "spa",
    date: "июнь 2026",
    text: "Чуткие специалисты с волшебными руками. Мариам и Артём сделали прекрасную спа-программу. Лучший подарок на день рождения!",
  },
  {
    id: "r8",
    name: "Екатерина Р.",
    salon: "vip",
    date: "декабрь 2022",
    text: "Любимый салон: приятный интерьер, ненавязчивая музыка, внимательные мастера и администраторы. За много лет ни разу не возникло сложностей.",
  },
];

export const hammamIncludes = [
  "Индивидуальный хаммам: 25 или 50 минут, до 4 гостей",
  "Пилинг рукавицей кессе и крем-скрабом",
  "Пенный массаж прямо в хаммаме",
  "Обёртывание: водорослевое, кремовое, шоколадное",
  "Восточная чайная церемония",
  "Инфракрасная кабина и кедровая бочка",
];

export const hammamPrograms = ["spa-ham-renew", "spa-ham-restore", "spa-ham-tale", "spa-ham-girls", "spa-ham-party"];
