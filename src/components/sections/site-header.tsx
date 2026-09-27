import { Phone } from "lucide-react";

import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { NAV, PHONE_MAIN } from "@/content/site";

/** Шапка не липкая: уезжает со скроллом, на телефоне запись в нижней панели */
export function SiteHeader() {
  return (
    <header className="relative z-20">
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-3">
        <a href="#hero" className="flex min-h-11 items-center gap-3" aria-label="IREN, сеть салонов красоты: в начало">
          <Wordmark className="text-[1.55rem] sm:text-[1.75rem]" />
          <span aria-hidden="true" className="hidden border-l border-line pl-3 text-[0.72rem] leading-tight text-fg-muted sm:block">
            сеть салонов
            <br />
            красоты
          </span>
        </a>
        <nav aria-label="Разделы" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="inline-flex min-h-11 items-center px-3.5 text-[0.95rem] text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_MAIN.tel}`}
            className="tabular hidden min-h-11 items-center px-2 text-[0.95rem] transition-colors hover:text-brand-3 md:inline-flex"
          >
            {PHONE_MAIN.display}
          </a>
          <a
            href={`tel:${PHONE_MAIN.tel}`}
            aria-label={`Позвонить: ${PHONE_MAIN.display}`}
            className="grid size-11 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg md:hidden"
          >
            <Phone aria-hidden="true" className="size-4" />
          </a>
          <MagneticButton asChild size="sm" wrapperClassName="hidden min-[360px]:block">
            <a href="#booking">Записаться</a>
          </MagneticButton>
        </div>
      </Container>
    </header>
  );
}
