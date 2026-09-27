import { fail, flaky, invalid, latency, ok } from "@/lib/api/http";
import { ServicesQuerySchema, type ServicesResponse } from "@/lib/api/schemas";
import { SALON_IDS, filterServices } from "@/lib/services";

/* GET /api/services?salon=spa|vip&category=hair|nails|cosmo|massage|hammam
   200: список (может быть пустым: хаммама в VIP нет), 404: нет салона, 422: неверные параметры, 503: сбой (?chaos=1) */
export async function GET(req: Request) {
  const params = Object.fromEntries(new URL(req.url).searchParams);
  const parsed = ServicesQuerySchema.safeParse(params);
  if (!parsed.success) return invalid(parsed.error);
  const { salon, category } = parsed.data;

  await latency(350, 850);
  if (flaky(req)) return fail(503, "unavailable", "Прайс не загрузился");

  const known = SALON_IDS.find((id) => id === salon);
  if (!known) return fail(404, "unknown_salon", "Такого салона в сети нет");

  const body: ServicesResponse = { salon: known, category: category ?? null, items: filterServices(known, category) };
  return ok(body);
}
