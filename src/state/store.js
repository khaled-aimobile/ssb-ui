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
      state.countryData = countryData; 
    },
    SET_MARITAL_DATA(state, maritalData) {
      state.maritalData = maritalData; 
    },
    SET_NATIONALITY_DATA(state, nationalityData) {
      state.nationalityData = nationalityData; 
    },
    SET_RACE_DATA(state, raceData) {
      state.raceData = raceData; 
    },
    SET_RELIGION_DATA(state, religionData) {
      state.religionData = religionData; 
    },
    SET_STATE_DATA(state, stateData) {
      state.stateData = stateData; 
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
      commit('SET_AUTH', false);
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
    },
    fetchCountryData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/country')
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
    fetchMaritalData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/marital_status')
        .then((response) => {
          const marital = response.data.marital_status;
          const maritalNames = marital.map((marital) => ({
            value: marital.name,
            name: marital.name,
          }));
  
          commit('SET_MARITAL_DATA', maritalNames);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    },
    fetchNationalityData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/nationality')
        .then((response) => {
          const nationality = response.data.nationality;
          const nationalityNames = nationality.map((nationality) => ({
            value: nationality.name,
            name: nationality.name,
          }));
  
          commit('SET_NATIONALITY_DATA', nationalityNames);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    },
    fetchRaceData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/race')
        .then((response) => {
          const race = response.data.race;
          const raceNames = race.map((race) => ({
            value: race.name,
            name: race.name,
          }));
  
          commit('SET_RACE_DATA', raceNames);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    },
    fetchReligionData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/religion')
        .then((response) => {
          const religion = response.data.religion;
          const religionNames = religion.map((religion) => ({
            value: religion.name,
            name: religion.name,
          }));
  
          commit('SET_RELIGION_DATA', religionNames);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    },
    fetchStateData({ commit }) {
      axios.get(process.env.VUE_APP_API_URL + '/state')
        .then((response) => {
          const state = response.data.states;
          const stateNames = state.map((state) => ({
            value: state.name,
            name: state.name,
          }));
  
          commit('SET_STATE_DATA', stateNames);
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
    maritalData: (state) => state.maritalData,
    raceData: (state) => state.raceData,
    religionData: (state) => state.religionData,
    stateData: (state) => state.stateData,
  },
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

