export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const routePairs = [
  ["/", "/ru/"],
  ["/work/", "/ru/work/"],
  ["/work/endokey/", "/ru/work/endokey/"],
  ["/work/povkh-lab/", "/ru/work/povkh-lab/"],
  ["/services/", "/ru/services/"],
  ["/process/", "/ru/process/"],
  ["/studio/", "/ru/studio/"],
  ["/blog/", "/ru/blog/"],
  ["/contact/", "/ru/contact/"],
  ["/privacy/", "/ru/privacy/"],
  ["/cookies/", "/ru/cookies/"],
] as const;

const equivalents = new Map<string, string>(
  routePairs.flatMap(([en, ru]) => [[en, ru], [ru, en]]),
);

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
}

export function equivalentRoute(pathname: string): string {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const equivalent = equivalents.get(normalized);
  if (!equivalent) throw new Error(`No localized route equivalent for ${pathname}`);
  return equivalent;
}

export function localizeRoute(route: string, locale: Locale): string {
  if (locale === "en") return route;
  return route === "/" ? "/ru/" : `/ru${route}`;
}
