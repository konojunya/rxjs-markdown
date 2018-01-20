import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    text: ""
  },
  mutations: {
    update(state, text) {
      state.text = text
    }
  }
})

export default store;