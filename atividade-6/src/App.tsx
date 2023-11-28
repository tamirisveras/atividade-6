// App.tsx

import React, { useEffect, useState } from "react";
import { getLastFmTopArtists, searchLastFmArtist, LastFmArtist } from "./componente/LastFmApi";

function App() {
  const [topArtists, setTopArtists] = useState<LastFmArtist[]>([]);
  const [searchedArtists, setSearchedArtists] = useState<LastFmArtist[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Carregar os artistas mais populares da Last.fm
    getLastFmTopArtists().then((artists) => {
      setTopArtists(artists);
    });
  }, []);

  const handleSearch = () => {
    // Realizar uma pesquisa por artistas
    searchLastFmArtist(searchQuery).then((artists) => {
      setSearchedArtists(artists);
    });
  };

  return (
    <div className="App">
      <h1>Top Artistas da Last.fm</h1>
      <ul>
        {topArtists.map((artist) => (
          <li key={artist.mbid}>{artist.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar Artistas</button>
      <h2>Artistas Encontrados</h2>
      <ul>
        {searchedArtists.map((artist) => (
          <li key={artist.mbid}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
