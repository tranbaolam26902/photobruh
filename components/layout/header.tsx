import { LocaleSwitcher, ThemeSwitcher } from '@/components';
import { APP_NAME } from '@/constants';
import { Link } from '@/i18n';
import { getTranslations } from 'next-intl/server';

export const Header = async () => {
  const t = await getTranslations('Header');

  return (
    <header className='flex flex-wrap items-center gap-x-4 gap-y-2 border-b p-4'>
      <nav
        aria-label={t('mainNavigation')}
        className='flex items-center gap-x-2'
      >
        <Link
          aria-label={t('goToHomepage')}
          href='/'
          className='font-semibold uppercase select-none'
        >
          {APP_NAME}
        </Link>
      </nav>

      <div
        aria-label={t('settings')}
        className='ml-auto flex items-center gap-x-2'
      >
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
};
