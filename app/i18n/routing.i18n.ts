import { defineRouting } from 'next-intl/routing';
import { appLocales, DEFAULT_APP_LOCALE } from '@/constants';

export const routing = defineRouting({
  locales: appLocales,
  defaultLocale: DEFAULT_APP_LOCALE,
  localePrefix: 'as-needed',
});
