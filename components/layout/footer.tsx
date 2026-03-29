import { getTranslations } from 'next-intl/server';

export const Footer = async () => {
  const t = await getTranslations('Footer');

  return (
    <footer className='border-t p-2 text-center text-sm font-thin'>
      {t('credit')}
    </footer>
  );
};
