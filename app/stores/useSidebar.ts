import { defineStore } from "pinia";

export const useSidebar = defineStore("counter", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    doubleCount: (state) => state.isOpen,
  },
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
