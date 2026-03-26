import { appLocales, DEFAULT_APP_LOCALE } from '@/constants';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: appLocales,
  defaultLocale: DEFAULT_APP_LOCALE,
  localePrefix: 'as-needed',
});
