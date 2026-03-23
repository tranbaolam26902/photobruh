import { AppTheme } from '@/constants';

export const StorageKey = {
  Theme: 'theme',
} as const;
export type StorageKey = (typeof StorageKey)[keyof typeof StorageKey];

export type StorageSchema = {
  [StorageKey.Theme]: AppTheme;
};
