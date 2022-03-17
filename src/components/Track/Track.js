import "./Track.css";

function Track(props) {
  const renderAction = (props) => {
    if(this.props.isRemoval){
      return <button className="Track-action">+</button>
    }
    else {
      return <button className="Track-action">-</button>
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Tracl Name will come here</h3>
        <p>track artist will go here | track album will go here</p>
      </div>
      <button className="Track-action">{renderAction}</button>
    </div>
  );
}



export default Track;
