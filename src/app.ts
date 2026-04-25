import { create } from "zustand";

interface AppStore {
  neonColor: string;
  setNeonColor: (color: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  neonColor: "--color-red-500",
  setNeonColor: (color) => set({ neonColor: color }),
}));
