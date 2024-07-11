import { createStore } from 'vuex'

import portfolio from './portfolio'
const store = createStore({
  modules: { portfolio },
  state() {
    return {
      isLoad: false
    }
  },
  mutations: {
    isLoad(state, payload) {
      state.isLoad = payload
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad
    }
  }
})
export default store
