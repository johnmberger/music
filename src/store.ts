import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import { AppState, ArtistInfo, Track } from './interfaces';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const initialState: AppState = {
  loading: true,
  weeklyArtists: [],
  weeklyTracks: [],
  recentTracks: [],
  weeklyArtistsError: false,
  weeklyTracksError: false,
  recentTracksError: false
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
        commit('setApiError', { name: 'recentTracksError', status: true });
      }
    },
    async getWeeklyTracks({ commit }): Promise<void> {
      try {
        const response: AxiosResponse = await api.getWeeklyTracks();
        const tracks: Track[] = response.data
          ? response.data.toptracks.track
          : [];
        commit('setWeeklyTracks', tracks);
      } catch (e) {
        commit('setApiError', { name: 'weeklyTracksError', status: true });
      }
    },
    async getRecentTracks({ commit }): Promise<void> {
      try {
        const response: AxiosResponse = await api.getRecentTracks();
        const tracks: Track[] = response.data
          ? response.data.recenttracks.track
          : [];
        commit('setRecentTracks', tracks);
      } catch (e) {
        commit('setApiError', { name: 'recentTracksError', status: true });
      }
    },
    setLoadingStatus({ commit }, status: boolean): void {
      commit('setLoadingStatus', status);
    }
  },
  mutations: {
    setWeeklyArtists(state: AppState, artists: ArtistInfo[]): void {
      state.weeklyArtists = artists;
    },
    setWeeklyTracks(state: AppState, tracks: Track[]): void {
      state.weeklyTracks = tracks;
    },
    setRecentTracks(state: AppState, tracks: Track[]): void {
      state.recentTracks = tracks;
    },
    setLoadingStatus(state: AppState, status: boolean): void {
      state.loading = status;
    },
    setApiError(
      state: AppState,
      {
        name,
        status
      }: {
        name: 'recentTracksError' | 'weeklyTracksError' | 'recentTracksError';
        status: boolean;
      }
    ): void {
      state[name] = status;
    }
  }
});
