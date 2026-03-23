export const AppTheme = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;
export type AppTheme = (typeof AppTheme)[keyof typeof AppTheme];
