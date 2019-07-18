import axios, { AxiosPromise } from 'axios';

const BASE_URL: string = 'https://stalk-me.johnmberger.com/music';

export default {
  getWeeklyArtists(): AxiosPromise {
    return axios.get(`${BASE_URL}/weekly-artists`);
  },
  getWeeklyTracks(): AxiosPromise {
    return axios.get(`${BASE_URL}/weekly-tracks`);
  },
  getRecentTracks(): AxiosPromise {
    return axios.get(`${BASE_URL}/recent-tracks`);
  }
};
