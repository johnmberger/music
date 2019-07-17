import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import { AppState, ArtistInfo, Track } from './interfaces';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const initialState: AppState = {
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
        const response: AxiosResponse = await api.getWeeklyArtists();
        const artists: ArtistInfo[] = response.data
          ? response.data.topartists.artist
          : [];
        commit('setWeeklyArtists', artists);
      } catch (e) {
        commit('apiError', e);
      }
    },
    async getWeeklyTracks({ commit }): Promise<void> {
      try {
        const response = await api.getWeeklyTracks();
        const tracks: Track[] = response.data
          ? response.data.toptracks.track
          : [];
        commit('setWeeklyTracks', tracks);
      } catch (e) {
        commit('apiError', e);
      }
    },
    async getRecentTracks({ commit }): Promise<void> {
      try {
        const response = await api.getRecentTracks();
        const tracks: Track[] = response.data
          ? response.data.recenttracks.track
          : [];
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
    setWeeklyArtists(state, artists: ArtistInfo[]): void {
      state.weeklyArtists = artists;
    },
    setWeeklyTracks(state, tracks: Track[]): void {
      state.weeklyTracks = tracks;
    },
    setRecentTracks(state, tracks: Track[]): void {
      state.recentTracks = tracks;
    },
    setLoadingStatus(state, status: boolean): void {
      state.loading = status;
    },
    setApiError(state, error: any): void {
      state.error = error;
    }
  }
});
