import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}
