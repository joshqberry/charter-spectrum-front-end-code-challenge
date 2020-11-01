import React from "react";
import './App.css';
import { RestaurantListingFetcher } from "./RestaurantListingFetcher";
import { FetchStatesForTableFilter } from "./FetchStatesForTableFilter";



function App() {
  return (
    <div className="App">
    <div>
      <FetchStatesForTableFilter />
    </div>
    <div>
      <RestaurantListingFetcher />
    </div>
    </div>
  );
}

export default App;
