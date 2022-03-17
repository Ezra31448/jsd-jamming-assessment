import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState, useEffect} from 'react';

const App = () => {
  const [searchResults, setSearchResults] = useState('');
  const [playlistName, setPlaylistName] = useState('');
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
    setPlaylistTrack(name)
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults}
            onAdd = {addTrack}
          />
          <Playlist playlistName={playlistName} 
                    playlistTrack={playlistTrack}
                    onNameChange={updatePlaylistName}
                    onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );

  
}

export default App;
