import { AppShell } from '@/components';
import { AppTheme } from '@/constants';
import { routing } from '@/i18n';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Photobruh',
  description:
    'Strike a pose. Add some vibes. Photobruh turns your browser into a photo booth.',
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${oswald.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme={AppTheme.System}
          enableSystem
        >
          <NextIntlClientProvider>
            <AppShell>{children}</AppShell>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
