export const AppTheme = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;
export type AppTheme = (typeof AppTheme)[keyof typeof AppTheme];

export const AppLocale = {
  EN: 'en',
  VI: 'vi',
} as const;
export type AppLocale = (typeof AppLocale)[keyof typeof AppLocale];
export const appLocales = Object.values(AppLocale);
export const DEFAULT_APP_LOCALE = AppLocale.EN;
