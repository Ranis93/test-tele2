import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      location: 'Москва и область'
    }
  },
  getters: {
    getLocation(state) {
      return state.location.trim()
    }
  }
})