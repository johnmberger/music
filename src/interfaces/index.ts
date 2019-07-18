export interface AppState {
  loading: boolean;
  weeklyArtists: ArtistInfo[];
  weeklyTracks: Track[];
  recentTracks: Track[];
  weeklyArtistsError: boolean;
  weeklyTracksError: boolean;
  recentTracksError: boolean;
}

export interface Artist {
  mbid: string;
  '#text': string;
}

export interface Track {
  '@attr'?: { nowplaying: 'true' | 'false' };
  artist: Artist;
  album: { mbid: string; '#text': string };
  name: string;
  image: Image[];
  url: string;
  mbid: string;
}

export interface ArtistInfo {
  '@attr': { rank: string };
  mbid: string;
  url: string;
  playcount: string;
  image: Image[];
  name: string;
}

interface Image {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega';
  '#text': string;
}
