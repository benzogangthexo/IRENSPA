import { MIRROR_PATH } from "@/components/brand/wordmark";
import { MobileCta } from "@/components/layout/mobile-cta";
import { Preloader } from "@/components/motion/preloader";
import { Booking } from "@/components/sections/booking";
import { Directions } from "@/components/sections/directions";
import { Hammam } from "@/components/sections/hammam";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Portfolio } from "@/components/sections/portfolio";
import { Prices } from "@/components/sections/prices";
import { Rating } from "@/components/sections/rating";
import { Reviews } from "@/components/sections/reviews";
import { Salons } from "@/components/sections/salons";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { PHONE_MAIN, SOCIAL, salons } from "@/content/site";
import type { ServicesResponse } from "@/lib/api/schemas";
import { filterServices } from "@/lib/services";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3102";
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [salons.spa, salons.vip].map((s) => ({
      "@type": "BeautySalon",
      "@id": `${SITE}/#${s.id}`,
      name: s.name,
      url: `${SITE}/#salon-${s.id}`,
      image: `${SITE}${s.image.src}`,
      telephone: s.phone.tel,
      priceRange: "₽₽₽",
      currenciesAccepted: "RUB",
      address: {
        "@type": "PostalAddress",
        streetAddress: s.address,
        addressLocality: "Нижний Новгород",
        addressCountry: "RU",
      },
      geo: { "@type": "GeoCoordinates", latitude: s.geo.lat, longitude: s.geo.lon },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: WEEKDAYS, opens: "09:00", closes: "21:00" },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: s.id === "spa" ? "20:00" : "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: s.rating.value,
        bestRating: 5,
        ratingCount: s.rating.count,
        reviewCount: s.rating.reviews,
      },
      sameAs: [s.yandexUrl, SOCIAL.vk, SOCIAL.telegram],
      parentOrganization: { "@type": "Organization", name: "IREN, сеть салонов красоты", telephone: PHONE_MAIN.tel },
    })),
  };
}

export default function Home() {
  const initialPrices: ServicesResponse = { salon: "spa", category: "hair", items: filterServices("spa", "hair") };
  return (
    <>
      <Preloader>
        <svg viewBox="0 0 200 260" className="h-28 w-auto overflow-visible" fill="none">
          <defs>
            <linearGradient id="pl-bronze" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#b07a45" />
              <stop offset="0.55" stopColor="#f1d3a2" />
              <stop offset="1" stopColor="#c9955e" />
            </linearGradient>
          </defs>
          <path className="preloader__draw" pathLength={1} d={MIRROR_PATH} stroke="url(#pl-bronze)" strokeWidth="2" />
        </svg>
        <span className="text-bronze font-display text-2xl tracking-[0.34em]">IREN</span>
      </Preloader>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Manifesto />
        <Directions />
        <Prices initial={initialPrices} />
        <Portfolio />
        <Rating />
        <Hammam />
        <Salons />
        <Reviews />
        <Booking />
      </main>
      <SiteFooter />
      <MobileCta label="Записаться" phone={PHONE_MAIN.tel} heroId="hero" targetId="booking" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
    </>
  );
}
