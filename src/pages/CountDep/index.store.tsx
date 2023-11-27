import { SetStateAction } from "react";
import { create } from "zustand";

export interface CountDepStoreType {
  count: number;
  setCount: (count: SetStateAction<number>) => void;
  resetCount: () => void;
}
export const useCountDepStore = create<CountDepStoreType>((set) => ({
  count: 0,
  setCount: (prev: SetStateAction<number>) => {
    prev instanceof Function
      ? set((state) => ({ count: prev(state.count) }))
      : set({ count: prev });
  },
  resetCount: () => {
    set({ count: 0 });
  },
}));
