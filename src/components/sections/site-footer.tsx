import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { GiantWordmark } from "@/components/motion/giant-wordmark";
import { PHONE_MAIN, SOCIAL, salons } from "@/content/site";

const linkCls = "inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-brand-3 hover:underline";

export function SiteFooter() {
  return (
    <footer className="relative overflow-clip border-t border-line pb-[calc(var(--mobile-cta-h)+env(safe-area-inset-bottom)+1.5rem)] pt-16 md:pb-10 md:pt-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-[var(--col-gap)]">
          <div className="lg:col-span-4">
            <Wordmark className="text-[2rem]" />
            <p className="mt-4 max-w-[30ch] text-fg-muted">Сеть салонов красоты в Нижнем Новгороде: спа с хаммамом и VIP-салон в центре.</p>
            <ul className="mt-4 flex flex-wrap gap-x-5">
              <li>
                <a href={SOCIAL.vk} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Telegram
                </a>
              </li>
              <li>
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          {[salons.spa, salons.vip].map((s) => (
            <div key={s.id} className="lg:col-span-3">
              <p className="flex items-baseline">
                <span className="mr-1.5 font-hand text-2xl leading-none text-brand-3">{s.hand}</span>
                <span className="font-display text-lg leading-none tracking-[0.16em]">IREN</span>
              </p>
              <p className="mt-3">{s.address}</p>
              <p className="text-sm text-fg-muted">{s.hours.map((h) => `${h.days} ${h.time}`).join(", ")}</p>
              <p>
                <a href={`tel:${s.phone.tel}`} className={`tabular ${linkCls}`}>
                  {s.phone.display}
                </a>
              </p>
              <p>
                <a href={s.yclientsUrl} target="_blank" rel="noopener noreferrer" className={`text-sm text-fg-muted ${linkCls}`}>
                  Онлайн-запись YClients
                  <span className="sr-only"> (откроется в новой вкладке)</span>
                </a>
              </p>
            </div>
          ))}
          <div className="lg:col-span-2">
            <p className="t-eyebrow text-fg-muted">Общий номер</p>
            <a href={`tel:${PHONE_MAIN.tel}`} className={`tabular mt-1 ${linkCls}`}>
              {PHONE_MAIN.display}
            </a>
          </div>
        </div>
      </Container>
      <div className="mt-14 px-[max(var(--gutter),env(safe-area-inset-left))] md:mt-20">
        <GiantWordmark text="IREN" className="font-display leading-none" letterClassName="text-bronze" />
      </div>
      <Container className="mt-6 flex flex-col gap-2 text-xs text-fg-muted sm:flex-row sm:justify-between">
        <p>© 2026 IREN. ИП Белякова И. В., ОГРНИП 304525729400047</p>
        <p>Цены из онлайн-записи салонов, точную сумму назовёт администратор.</p>
      </Container>
    </footer>
  );
}
