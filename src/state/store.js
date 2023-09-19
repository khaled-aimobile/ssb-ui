import { createStore } from 'vuex'

import modules from './modules'
import axios from 'axios';

const store = createStore({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      axios.post('http://localhost:8081/login', { email, password })
        .then(response => {
          const token = response.data.token;
          commit('setToken', token);
        })
        .catch(error => {
          // Handle authentication errors
          console.error(error);
        });
    },
    logout({ commit }) {
      // Clear the token when the user logs out
      commit('clearToken');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
  },
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

