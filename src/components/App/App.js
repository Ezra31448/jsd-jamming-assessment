import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState, useEffect} from 'react';

const App = () => {
  const [searchResults, setSearchResults] = useState('');
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTrack, setPlaylistTrack] = useState([]);

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
    const trackURIs = playlistTrack.map((track) => track.uri);
  };

  const search = (searchTerm) => {
    console.log(searchTerm);
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
