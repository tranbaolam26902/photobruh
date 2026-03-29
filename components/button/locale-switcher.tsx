'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components';
import { AppLocale } from '@/constants';
import { Link, usePathname } from '@/i18n';
import { ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

const appLocales = {
  [AppLocale.EN]: {
    label: '🇺🇸 English',
    icon: '🇺🇸 ',
  },
  [AppLocale.VI]: {
    label: '🇻🇳 Tiếng Việt',
    icon: '🇻🇳 ',
  },
} as const;

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={t('currentLanguage', {
            language: appLocales[locale as AppLocale].label,
          })}
          size='sm'
          variant='ghost'
        >
          {appLocales[locale as AppLocale].icon} <ChevronDown />
          <span className='sr-only'>{t('changeLanguage')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={8} className='min-w-fit'>
        <DropdownMenuGroup>
          {Object.keys(appLocales).map((appLocale) => (
            <DropdownMenuItem asChild key={appLocale}>
              <Link
                role='menuitemradio'
                aria-checked={locale === appLocale}
                lang={locale}
                href={pathname}
                locale={appLocale}
              >
                {appLocales[appLocale as AppLocale].label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
