import { useState, useEffect, connect } from "react-redux";
import "./App.css";
import Gallery from "./Gallery";
import ButtonBar from "./ButtonBar";


function App() {
  let [data, setData] = useState({});
  let [artId, setArtId] = useState(12720);

  useEffect(() => {
    document.title = "Welcome to ArtWorld";
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchData())
  }, [props.objectId, dispatch])  

  return (
    <div>
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <div>
        <ButtonBar handleIterate={handleIterate} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

export default connect(mapStateToProps)(App);

