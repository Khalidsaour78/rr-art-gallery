import { useState, useEffect } from "react";
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

export default App;