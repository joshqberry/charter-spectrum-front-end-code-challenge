import React from "react";
import './App.css';
import { FetchStatesForTableFilter } from "./FetchStatesForTableFilter";
import { FetchGenresForTableFilter } from "./FetchGenresForTableFilter";
import { RestaurantListings } from "./RestaurantListings";

function App() {
  return (

    <div className="App">
    <div>
      <FetchGenresForTableFilter />
    </div>
    <br>
    </br>
    <div>
      <FetchStatesForTableFilter />
    </div>
    <div>
      <RestaurantListings />
    </div>
    </div>
  );
}


export default App;
