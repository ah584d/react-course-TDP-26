import { create } from "zustand";

// 1️⃣ Create the store with state and actions
const useCounterStore = create((set) => ({
  // State
  count: 0,

  // Actions
  add: () => set((state) => ({ count: state.count + 1 })),
  remove: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
