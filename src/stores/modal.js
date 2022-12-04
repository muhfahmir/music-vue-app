// create new store
import { defineStore } from "pinia";

export default defineStore("modal", {
  // full data state
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
