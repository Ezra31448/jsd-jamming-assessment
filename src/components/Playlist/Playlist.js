import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
function Playlist({playlistName, playlistTrack, onRemove, onNameChange}) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value)
  }
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <TrackList lists={playlistTrack} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
