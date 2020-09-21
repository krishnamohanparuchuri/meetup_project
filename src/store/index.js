import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = {};
      state.events = events
    }
  },
  actions: {
    loadEvents({ commit }) {
      axios.get('http://localhost:5000/events')
        .then(res => res.data)
        .then(events => {
          console.log(events)
          commit('SET_EVENTS', events)
        })
    }
  },
  modules: {
  }
})
