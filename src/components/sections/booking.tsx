import { BookingWizard } from "@/components/booking/booking-wizard";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Section } from "@/components/layout/section";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { PHONE_MAIN, salons } from "@/content/site";

export function Booking() {
  const phones = [
    { label: salons.spa.name, phone: salons.spa.phone },
    { label: salons.vip.name, phone: salons.vip.phone },
    { label: "Общий номер", phone: PHONE_MAIN },
  ];
  return (
    <Section id="booking" labelledBy="booking-title" className="isolate">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%] bg-[radial-gradient(60%_60%_at_20%_0%,rgb(201_149_94/0.12),transparent_70%)]" />
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--col-gap)]">
        <div className="lg:col-span-4">
          <Eyebrow index="09">Запись</Eyebrow>
          <MaskReveal as="h2" id="booking-title" className="t-h2 mt-6" lines={["Запись", "без звонка"]} />
          <p className="t-lead mt-5 max-w-[34ch] text-fg-muted">
            Салон, услуга, день и время. Администратор перезвонит и подтвердит визит.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {phones.map((p) => (
              <li key={p.label} className="flex flex-wrap items-center justify-between gap-x-4">
                <span className="text-sm text-fg-muted">{p.label}</span>
                <a href={`tel:${p.phone.tel}`} className="tabular inline-flex min-h-12 items-center underline-offset-4 hover:underline">
                  {p.phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-8">
          <BookingWizard successNote="Администратор салона перезвонит, чтобы подтвердить запись. Если планы поменяются, просто позвоните в салон." />
        </div>
      </Container>
    </Section>
  );
}
