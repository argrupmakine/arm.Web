import tr from '@/locales/tr.json';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';

const dictionaries: Record<string, Record<string, unknown>> = { tr, en, de, fr };

export function getTranslation(locale: string, key: string): string {
  const dict = dictionaries[locale] || tr;

  // 1. Direct flat key lookup (e.g., "seo.referanslar.title" or "slug.hakkimizda")
  if (typeof dict[key] === 'string') {
    return dict[key];
  }

  // 2. Nested key lookup if dictionary has nested structure
  const parts = key.split('.');
  let current: unknown = dict;
  let isNestedFound = true;
  for (const part of parts) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== 'object' ||
      !(part in (current as Record<string, unknown>))
    ) {
      isNestedFound = false;
      break;
    }
    current = (current as Record<string, unknown>)[part];
  }
  if (isNestedFound && typeof current === 'string') {
    return current;
  }

  // 3. Fallback to Turkish dictionary
  if (dict !== tr) {
    const trDict = tr as Record<string, unknown>;
    if (typeof trDict[key] === 'string') {
      return trDict[key];
    }
    let trCurrent: unknown = tr;
    let trFound = true;
    for (const part of parts) {
      if (
        trCurrent === null ||
        trCurrent === undefined ||
        typeof trCurrent !== 'object' ||
        !(part in (trCurrent as Record<string, unknown>))
      ) {
        trFound = false;
        break;
      }
      trCurrent = (trCurrent as Record<string, unknown>)[part];
    }
    if (trFound && typeof trCurrent === 'string') {
      return trCurrent;
    }
  }

  return key;
}
