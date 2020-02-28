import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedin: false,
  },
  mutations: {
    login (state) {
      state.logedin = true
      router.push('/')
    },
    logout (state) {
      state.logedin = false
      router.push('login')
    }
  },
  actions: {
  },
  modules: {
  }
})
