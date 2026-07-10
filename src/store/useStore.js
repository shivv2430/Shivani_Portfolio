import { create } from 'zustand'

const useStore = create((set) => ({
  activeSection: null, // 'about', 'skills', 'projects', 'socials', 'contact'
  isNightMode: false,
  coffeeEnergy: false,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleNightMode: () => set((state) => ({ isNightMode: !state.isNightMode })),
  drinkCoffee: () => set({ coffeeEnergy: true }),
}))

export default useStore
