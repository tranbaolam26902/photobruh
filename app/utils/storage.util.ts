import { StorageSchema } from '@/constants';

export const storage = {
  get<K extends keyof StorageSchema>(key: K): StorageSchema[K] | null {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  },

  set<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: keyof StorageSchema) {
    localStorage.removeItem(key);
  },
};
