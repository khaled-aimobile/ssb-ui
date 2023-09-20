import { createStore } from 'vuex'

import modules from './modules'


const store = createStore({
  state: {
    isAuthenticated: false,
    token: localStorage.getItem('access_token') || '',
    user: null,
  },
  mutations: {
    SET_AUTH(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('access_token', token);
      console.log(state.token);
    },
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.isAuthenticated = false;
      state.token = '';
      state.user = null;
      localStorage.removeItem('access_token');
    },
  },
  actions: {
    login({ commit }, userData) {
      commit('SET_AUTH', true);
      commit('SET_TOKEN', userData.access_token);
      commit('SET_USER', userData.user_details);
      localStorage.setItem('user', JSON.stringify(userData.user_details));
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

