import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
function Playlist({playlistName, playlistTrack, onRemove}) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList lists={playlistTrack} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
