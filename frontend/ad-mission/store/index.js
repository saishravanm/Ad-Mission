import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    events: null,
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      try {
        const response = await axios.get("http://localhost:8000/api/getevents");
        commit('setEvents', response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
  },
  getters: {
    events: state => state.events,
  },
});