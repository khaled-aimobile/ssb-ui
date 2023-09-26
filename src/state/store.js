import { createStore } from 'vuex'

import modules from './modules'
import axios from 'axios';


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
    SET_COUNTRY_DATA(state, countryData) {
      state.countryData = countryData; // Assuming you have a 'countryData' property in your state
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
    fetchCountryData({ commit }) {
      axios.get('http://54.169.164.7/ssb_users/public/api/country')
        .then((response) => {
          const countries = response.data.countries;
          const countryNames = countries.map((country) => ({
            value: country.name,
            name: country.name,
          }));
  
          commit('SET_COUNTRY_DATA', countryNames);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    countryData: (state) => state.countryData,
  },
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

