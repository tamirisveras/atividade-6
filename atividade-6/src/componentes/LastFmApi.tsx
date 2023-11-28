// LastFmApi.ts
import axios, { AxiosResponse } from "axios";

const apiKey = process.env.REACT_APP_LASTFM_API_KEY as string;
const sharedSecret = process.env.REACT_APP_LASTFM_SHARED_SECRET as string;

interface LastFmArtist {
  mbid: string;
  name: string;
  // Adicione outros campos conforme necessário
}

const api = axios.create({
  baseURL: `http://www.last.fm/api/auth`,
});

export const getLastFmTopArtists = async (): Promise<LastFmArtist[]> => {
  try {
    const response: AxiosResponse = await api.get(
      `/2.0/?method=artist.gettopalbums&artist=cher&api_key=${apiKey}&format=json`
    );
    return response.data.artists.artist;
  } catch (error) {
    throw error;
  }
};

export const searchLastFmArtist = async (
  artistName: string
): Promise<LastFmArtist[]> => {
  try {
    const response: AxiosResponse = await api.get(
      `?method=artist.search&artist=${artistName}&api_key=${apiKey}&format=json`
    );
    return response.data.results.artistmatches.artist;
  } catch (error) {
    throw error;
  }
};

export { LastFmArtist };
