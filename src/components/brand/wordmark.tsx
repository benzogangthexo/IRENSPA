import { cn } from "@/lib/utils";

/** Вордмарк как в логотипах салонов: рукописное Spa/Vip + антиквенные капители IREN в бронзе */
export function Wordmark({ hand, className }: { hand?: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline leading-none", className)}>
      {hand ? <span className="mr-[0.18em] font-hand text-[1.05em] text-brand-3">{hand}</span> : null}
      <span className="text-bronze font-display tracking-[0.2em]">IREN</span>
    </span>
  );
}

/** Органическая форма зеркала из интерьера Spa IREN (viewBox 0 0 200 260) */
export const MIRROR_PATH =
  "M104 6C152 7 186 38 189 92c3 44-12 66-8 104 4 36-26 58-76 58-50 0-86-18-89-60-2-34 14-54 8-96C18 50 52 5 104 6Z";
