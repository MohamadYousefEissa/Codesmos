import { createStore } from 'vuex'

import portfolio from './portfolio'
import sendEmail from './sendEmail'
const store = createStore({
  modules: { portfolio, sendEmail },
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
