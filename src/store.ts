import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

const initialState = {
  loading: true,
  error: null,
  weeklyArtists: [],
  weeklyTracks: [],
  recentTracks: []
};

export default new Vuex.Store({
  state: initialState,
  actions: {
    async getWeeklyArtists({ commit }): Promise<void> {
      try {
        const response = await api.getWeeklyArtists();
        const artists = response.data ? response.data.topartists.artist : [];
        commit('setWeeklyArtists', artists);
      } catch (e) {
        commit('apiError', e);
      }
    },
    async getWeeklyTracks({ commit }): Promise<void> {
      try {
        const response = await api.getWeeklyTracks();
        const tracks = response.data ? response.data.toptracks.track : [];
        commit('setWeeklyTracks', tracks);
      } catch (e) {
        commit('apiError', e);
      }
    },
    async getRecentTracks({ commit }): Promise<void> {
      try {
        const response = await api.getRecentTracks();
        const tracks = response.data ? response.data.recenttracks.track : [];
        commit('setRecentTracks', tracks);
      } catch (e) {
        commit('apiError', e);
      }
    },
    setLoadingStatus({ commit }, status: boolean): void {
      commit('setLoadingStatus', status);
    }
  },
  mutations: {
    setWeeklyArtists(state, artists): void {
      state.weeklyArtists = artists;
    },
    setWeeklyTracks(state, tracks): void {
      state.weeklyTracks = tracks;
    },
    setRecentTracks(state, tracks): void {
      state.recentTracks = tracks;
    },
    setLoadingStatus(state, status): void {
      state.loading = status;
    },
    setApiError(state, error): void {
      state.error = error;
    }
  }
});
