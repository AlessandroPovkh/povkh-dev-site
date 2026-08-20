import { getEntry, getCollection } from "astro:content";
import type { Locale } from "./i18n";

export async function getSite(locale: Locale) {
  const entry = await getEntry("site", locale);
  if (!entry) throw new Error(`Missing site authority for ${locale}`);
  return entry.data;
}

export async function getServices(locale: Locale) {
  const entry = await getEntry("services", locale);
  if (!entry) throw new Error(`Missing services authority for ${locale}`);
  return entry.data;
}

export async function getProcess(locale: Locale) {
  const entry = await getEntry("process", locale);
  if (!entry) throw new Error(`Missing process authority for ${locale}`);
  return entry.data;
}

export async function getTeam(locale: Locale) {
  const entry = await getEntry("team", locale);
  if (!entry) throw new Error(`Missing team authority for ${locale}`);
  return entry.data;
}

export async function getFaq(locale: Locale) {
  const entry = await getEntry("faq", locale);
  if (!entry) throw new Error(`Missing FAQ authority for ${locale}`);
  return entry.data;
}

export async function getLocalizedWork(locale: Locale) {
  const entries = await getCollection("work", ({ data }) => data.locale === locale);
  return entries.sort((left, right) =>
    left.data.order - right.data.order || left.data.caseSlug.localeCompare(right.data.caseSlug),
  );
}

export async function getWorkCase(locale: Locale, caseSlug: string) {
  const entry = (await getLocalizedWork(locale)).find(({ data }) => data.caseSlug === caseSlug);
  if (!entry) throw new Error(`Missing ${locale} work case: ${caseSlug}`);
  return entry;
}

export async function getFeaturedWork(locale: Locale) {
  return (await getLocalizedWork(locale)).filter(({ data }) => data.featured);
}

export async function getLocalizedLegal(locale: Locale) {
  return getCollection("legal", ({ data }) => data.locale === locale);
}
