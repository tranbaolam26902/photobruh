'use client';

import { Button } from '@/components';
import { AppTheme } from '@/constants';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const appThemes = [
  {
    value: AppTheme.System,
    icon: Monitor,
  },
  {
    value: AppTheme.Light,
    icon: Sun,
  },
  {
    value: AppTheme.Dark,
    icon: Moon,
  },
] as const;

export const ThemeSwitcher = () => {
  const t = useTranslations('ThemeSwitcher');
  const { theme, setTheme } = useTheme();

  /**
   * This state is used to prevent hydration mismatch between
   * server-rendered HTML and client-rendered HTML.
   *
   * Why this is needed:
   * - next-themes reads theme from localStorage or system preference
   * - These values are ONLY available in the browser
   * - On the server, the theme is unknown
   *
   * So the render flow without this would be:
   *   Server render  → theme = undefined / default
   *   Client render  → theme = "dark" (from localStorage/system)
   *
   * This would cause:
   *   Hydration mismatch error
   *
   * To avoid this, we:
   *   1. Render nothing on the server
   *   2. Render nothing on the first client render
   *   3. After the component mounts (client only), we render the switcher
   *
   * This ensures:
   *   Server HTML === First client render HTML
   *   → No hydration mismatch
   */
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // We set mounted = true only after the component mounts in the browser.
    // This guarantees that theme from next-themes is available.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Do not render anything until mounted on client
  // This prevents SSR/client mismatch when reading theme
  if (!isMounted) return null;

  return (
    <div
      role='group'
      aria-label={t('switcher')}
      className='flex w-fit items-center gap-x-1 rounded-full border p-px'
    >
      {appThemes.map((appTheme) => {
        const isSelected = appTheme.value === theme;

        return (
          <Button
            aria-label={t(appTheme.value)}
            aria-pressed={isSelected}
            key={appTheme.value}
            size='icon'
            variant={isSelected ? 'secondary' : 'ghost'}
            onClick={() => setTheme(appTheme.value)}
          >
            {/* Icon is decorative, so hide from screen readers */}
            <appTheme.icon aria-hidden={true} />
          </Button>
        );
      })}
    </div>
  );
};
