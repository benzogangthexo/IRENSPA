import type { ReactNode } from "react";

import { Eyebrow } from "@/components/layout/eyebrow";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { cn } from "@/lib/utils";

/** Шапка секции: номер + подпись слева, заголовок строками из-под маски, лид */
export function SectionHead({
  index,
  eyebrow,
  titleId,
  lines,
  lead,
  className,
}: {
  index: string;
  eyebrow: string;
  titleId: string;
  lines: ReactNode[];
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:gap-x-[var(--col-gap)]", className)}>
      <Eyebrow index={index} className="lg:col-span-3 lg:pt-4">
        {eyebrow}
      </Eyebrow>
      <div className="lg:col-span-9">
        <MaskReveal as="h2" id={titleId} lines={lines} className="t-h2" />
        {lead ? <p className="t-lead mt-5 max-w-[52ch] text-fg-muted">{lead}</p> : null}
      </div>
    </div>
  );
}
