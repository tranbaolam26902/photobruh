import { Footer, Header, PageContainer } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

export const AppShell = async ({ children }: { children: ReactNode }) => {
  const t = await getTranslations('AppShell');

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <a
        href='#main-content'
        className='focus:bg-background sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2'
      >
        {t('skipToMainContent')}
      </a>

      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
};
