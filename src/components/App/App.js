import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState, useEffect } from 'react';
import Spotify from "../../utils/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTrack, setPlaylistTrack] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
    console.log(`in use effect`);
  }, [])

  const addTrack = (track) => {
    if(playlistTrack.find((prevTrack) => prevTrack.id === track.id)){
      return;
    };

    setPlaylistTrack([...playlistTrack, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTrack(playlistTrack.filter((prevTrack) => prevTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  };

  const savePlaylist = () => {
    //const trackURIs = playlistTrack.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, playlistTrack).then(() => {
      setPlaylistTrack([]);
      setPlaylistName('New Playlist');
    })
  };

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then((tracks)=> {
      console.log(tracks);
      setSearchResults(tracks);
    });
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults}
            onAdd = {addTrack}
          />
          <Playlist playlistName={playlistName} 
                    playlistTrack={playlistTrack}
                    onNameChange={updatePlaylistName}
                    onRemove={removeTrack}
                    onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );

  
}

export default App;
