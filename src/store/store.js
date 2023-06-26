import { defineStore } from "pinia";

export const useShortStore = defineStore("short", {
  state: () => ({
    menuStatus: false,
  }),
  getters: {},
  actions: {
    openMenu() {
      this.menuStatus = true;
    },
    closeMenu() {
      this.menuStatus = false;
    },
  },
});
export default useShortStore;
