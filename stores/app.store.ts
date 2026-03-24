import { create } from 'zustand';
import { AppTheme, StorageKey } from '@/constants';
import { storage } from '@/utils';

interface State {
  theme: AppTheme;
}
interface Actions {
  setTheme: (theme: State['theme']) => void;

  reset: () => void;
}
type Store = State & Actions;

const initialState: State = {
  theme: storage.get(StorageKey.Theme) || AppTheme.System,
};

export const useAppStore = create<Store>((set) => ({
  ...initialState,

  setTheme: (theme) => {
    storage.set(StorageKey.Theme, theme);
    set({ theme });
  },

  reset: () => set(initialState),
}));
