import "./App.css";
// import axios from "axios";
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
      osmTag:'',
    })
  }

  const onOsmTagChanged = (field) => {
    setSearch({
    query: search.query,
    osmTag: field.target.value
    })
  }

  return (
    <div>
      <div className='api-descibtion-text'>This is a try</div>
        <form>
          <div>
          <label htmlFor='capitol' >Finding Capitol</label>
          <input id ='capitolfield' type='text' placeholder="e.g. Berlin"/>
          </div>
          <div>
            <label htmlFor='osmTag'>osmTag</label>
            <input id='osmfield' type='text' placeholder="e.g. tourism"/>
          </div>
          <button className='submitbutton'>submit</button>
        </form>
      </div>
  );
}

export default App;