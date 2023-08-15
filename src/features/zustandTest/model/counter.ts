import { create } from "zustand";

interface counterState {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useCounter = create<counterState>((set, get) => ({
	counter:0,
	increment: () => set({counter:get().counter + 1}),
	decrement: () => set({counter:get().counter - 1}),
}))