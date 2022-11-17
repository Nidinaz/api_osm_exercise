import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  //state die de data renderd en veranderd
  const [search, setSearch] = useState({
    query: "",
    osmTag: "",
  });

  const onQueryChanged = (field) => {
    setSearch({
      query: field.target.value,
      osmTag: "",
    });
  };

  const onOsmTagChanged = (field) => {
    setSearch({
      query: search.query,
      osmTag: field.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
  };

  // const CityApi = (props) => {
  //   if (!search) {
  //     let baseApi = "https://photon.komoot.io/api/?q=" + props.city;
  //   }
  //   if (props.osmTag) {
  //     baseApi = baseApi + "&osm_tag=" + props.osmTag;
  //   }
  //   console.log("Basie Api: " + { baseApi });
  //   axios.get(baseApi).then(response);
  // };

  return (
    <div>
      <div className="api-descibtion-text">This is a try</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="capitol">Finding Capitol</label>
          <input
            id="capitolfield"
            type="text"
            placeholder="e.g. Berlin"
            value={search.query}
            onChange={onQueryChanged}
          />
        </div>
        <div>
          <label htmlFor="osmTag">osmTag</label>
          <input
            id="osmfield"
            type="text"
            placeholder="e.g. tourism"
            value={search.osmTag}
            onChange={onOsmTagChanged}
          />
        </div>
        <button type="submit" className="submitbutton">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
