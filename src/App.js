import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState({
    query: "",
    osmTag: "",
  });

  const onQueryChanged = (field) => {
    setSearch({
      query: field.target.value,
      osmTag: search.osmTag,
    });
    console.log(field)
  };

  const onOsmTagChanged = (field) => {
    setSearch({
      query: search.query,
      osmTag: field.target.value,
    });
  };

  // function TextInput {( type = 'text', label)} {
  //   const [value, setValue] = useState('');

  //   function handleCange(e) {
  //     setValue(e.target.value)
  //   } 
  // }

  return (
    <div className="mainpage">
      <div className="api-descibtion-text">
        This is a website to use OpenStreetMaps-Api
      </div>
      <form className="form">
        <div className="query-container">
          <label htmlFor="capitol">capitol</label>
          <input
            id="capitolfield"
            type="text"
            placeholder="e.g. Berlin"
            value={search.query}
            onChange={onQueryChanged}
          />
        </div>
        <div className="osmtag-container">
          <label htmlFor="osmTag">osmTag</label>
          <input
            id="osmfield"
            type="text"
            placeholder="e.g. tourism"
            value={search.osmTag}
            onChange={onOsmTagChanged}
          />
        </div>
      </form>
      <CityApi key={search.query + search.osmTag} query={search.query} osmTag={search.osmTag}></CityApi>
    </div>
  );
}

//secound component - getting Api data and new output
const CityApi = (props) => {
  const [selectedCity, setSelectedCity] = useState('');

  if (!selectedCity) {
    let baseApi = "https://photon.komoot.io/api/?q=" + props.query;
    if (props.osmTag) {
      baseApi = baseApi + "&osm_tag=" + props.osmTag;
    }
    axios
      .get(baseApi)
      .then((response) => {
        const { data } = response;

        const photonAPI = data.features.map((feature) => {
          return (
            <div>
              <div>{feature.properties.name}</div>
            </div>
          );
        });
        setSelectedCity(<div>{photonAPI}</div>);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }
  return <div>{selectedCity}</div>;
};

//newe component because the api should be rendered on the page after using the search buttons
// const RenderedApi = (props) => {

export default App;
