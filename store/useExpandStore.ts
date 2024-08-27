import { create } from "zustand";

interface ExpandState {
  expanded: boolean;
  index: number;
  setExpand: (value: boolean) => void;
  setIndex: (value: number) => void;
}

const useExpandStore = create<ExpandState>((set) => ({
  expanded: false,
  index: -1,
  setExpand: (value) => set((state) => ({ ...state, expanded: value })),
  setIndex: (value) => set((state) => ({ ...state, index: value })),
}));

export default useExpandStore;
