export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
