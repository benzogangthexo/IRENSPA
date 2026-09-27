import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Cursor } from "@/components/motion/cursor";
import { headScript } from "@/components/motion/preloader";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

/* Brygada 1918: антиква с живым курсивом (заголовки) */
const display = localFont({
  src: [
    { path: "../fonts/brygada-1918-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/brygada-1918-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--ff-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

/* Ysabeau Office: гуманистический гротеск для текста */
const body = localFont({
  src: [
    { path: "../fonts/ysabeau-office-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ysabeau-office-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--ff-body",
  display: "swap",
});

/* Marck Script: только «Spa» и «Vip», как в логотипах салонов */
const hand = localFont({
  src: [{ path: "../fonts/marck-script-400.woff2", weight: "400", style: "normal" }],
  variable: "--ff-hand",
  display: "swap",
  preload: false,
});

const title = "IREN: спа с хаммамом и VIP-салон в Нижнем Новгороде";
const description =
  "Два салона сети IREN. Spa IREN на Карла Маркса, 32: хаммам, массаж, спа-программы, волосы и ногти. VIP IREN на Варварской, 8/22: окрашивание, косметология, маникюр. Цены, портфолио, онлайн-запись.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3102"),
  title,
  description,
  applicationName: "IREN",
  alternates: { canonical: "/" },
  keywords: [
    "салон красоты Нижний Новгород",
    "хаммам Нижний Новгород",
    "спа Мещерское озеро",
    "окрашивание airtouch Нижний Новгород",
    "VIP IREN",
    "Spa IREN",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "IREN",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#15100c",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-[110] rounded-full bg-brand px-5 py-3 text-brand-ink"
        >
          К содержимому
        </a>
        <Providers>
          <SmoothScroll />
          <Cursor />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
