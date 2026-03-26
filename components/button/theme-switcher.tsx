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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

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
            {<appTheme.icon aria-hidden={true} />}
          </Button>
        );
      })}
    </div>
  );
};
