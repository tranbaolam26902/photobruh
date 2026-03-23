import { create } from 'zustand';
import { AppTheme } from '@/constants';

interface State {
  theme: AppTheme;
}
interface Actions {
  setTheme: (theme: State['theme']) => void;

  reset: () => void;
}
type Store = State & Actions;

const initialState: State = {
  theme: AppTheme.System,
};

export const useAppStore = create<Store>((set) => ({
  ...initialState,

  setTheme: (theme) => set({ theme }),

  reset: () => set(initialState),
}));
