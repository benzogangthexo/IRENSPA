# IREN: сайт сети салонов красоты (Нижний Новгород)

Два салона: **Spa IREN** (ул. Карла Маркса, 32, хаммам и спа-зона) и **VIP IREN** (ул. Варварская, 8/22, цвет и косметология). Концепция «Бронза и пар»: тёмное дерево, бронза, пар.

## Запуск
```bash
pnpm i
pnpm dev                 # http://localhost:3000
pnpm build && pnpm start # прод-сборка
pnpm lint
```
Скопируйте `.env.example` в `.env.local` и укажите реальный домен в `NEXT_PUBLIC_SITE_URL`.

## Стек
Next.js 16 (App Router, Turbopack) + TypeScript strict, Tailwind v4, shadcn/ui (Radix), `motion` (Framer Motion), Lenis, zod, lucide-react, next/image (AVIF/WebP). Шрифты локальные (`src/fonts`): Brygada 1918, Ysabeau Office, Marck Script.

## Где что лежит
```
src/
  app/
    page.tsx              страница: прелоадер, секции, JSON-LD BeautySalon x2
    layout.tsx            шрифты, метаданные, курсор, плавный скролл
    icon.svg              фавикон (зеркало + I)
    api/services/         GET /api/services?salon=spa|vip&category=hair|nails|cosmo|massage|hammam
    api/slots, api/slots/hold, api/booking   запись: слоты, удержание, заявка
  content/
    site.ts               салоны, телефоны, часы, направления, портфолио, отзывы, хаммам
    services.ts           прайс (реальные цены из онлайн-записи YClients)
    booking.ts            конфиг записи: часы салонов (scopes), шаги, услуги
  lib/services.ts         общий фильтр прайса (роут + скелетон на клиенте), форматирование цен
  components/sections/    секции страницы
  components/motion/      параллакс, проявление текста, вращение, sticky-stack, курсор и т. д.
  assets/photos/          обработанные фото (PHOTOS.md)
```

## Контент
- Цены, услуги: `src/content/services.ts`. Салон, часы, телефоны, рейтинги, отзывы: `src/content/site.ts`.
- Часы записи по дням: `src/content/booking.ts` (0 = воскресенье). У каждого салона свои часы (`scopes`), роут `/api/slots` проверяет выбранный салон.
- Фото: положите JPEG в `src/assets/photos/` и импортируйте статически, next/image сам сделает форматы и размеры.

## Бэкенд-симуляция
Роуты валидируют запросы zod, отвечают с задержкой и корректными статусами (200/201/404/409/422/503). Добавьте `?chaos=1` к адресу страницы, чтобы увидеть состояния ошибки и повтор. Заявки живут в памяти процесса: для продакшена подключите YClients API или CRM в `src/app/api/booking/route.ts`.

## Проверка
`node scripts/qa.mjs http://localhost:3102 --shots=375,1440` (10 ширин: горизонтальный скролл, выход за край, тач-цели, обрезанный текст, битые картинки, ошибки консоли, CLS), флаги `--reduced`, `--nojs`.

## GitHub Pages (статическая версия, бесплатный хостинг)
- Адрес: https://benzogangthexo.github.io/IRENSPA/
- Собрать заново: `pnpm build:pages` (результат в `docs/`, закоммитить и запушить). Запись, фильтры и меню работают прямо в браузере теми же обработчиками API (`src/lib/api/local.ts`), фото заранее нарезаны в WebP под все ширины экрана.
- Включить один раз: Settings -> Pages -> Build and deployment: Deploy from a branch -> ветка `claude/sleepy-brahmagupta-jy6nfi` (или `main` после слияния PR) -> папка `/docs` -> Save.
- Полная версия с сервером (заявки уходят на бэкенд): `pnpm build && pnpm start` или Vercel.
