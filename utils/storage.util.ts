import { StorageSchema } from '@/constants';

const isBrowser = typeof window !== 'undefined';

export const storage = {
  get<K extends keyof StorageSchema>(key: K): StorageSchema[K] | null {
    if (!isBrowser) return null;

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },

  set<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]) {
    if (!isBrowser) return null;

    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: keyof StorageSchema) {
    if (!isBrowser) return null;

    localStorage.removeItem(key);
  },
};
