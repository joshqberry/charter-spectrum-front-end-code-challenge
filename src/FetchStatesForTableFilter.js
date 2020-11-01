import React, {useEffect, useState} from "react";
import App from "./App.css"

  const FetchStatesForTableFilter = () => {

    const [statesForTableFilter, setStatesForTableFilter] = useState([]);

    useEffect(() => {

      const fetchStatesForTableFilter = async () => {
        const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
        {
          headers: {Authorization: process.env.REACT_APP_RESTAURANT_LISTINGS_API_KEY},
        });

        let jsonResponse = await response.json();

        let arrayOfStates = jsonResponse.map(x => x.state);

        let arrayOfUniqueStates = [...new Set(arrayOfStates)];

        let arrayOfUniqueStatesSorted = arrayOfUniqueStates.sort();

        setStatesForTableFilter(arrayOfUniqueStatesSorted);

      } // ends fetchStatesForTableFilter function

      fetchStatesForTableFilter();

    }, []); // ends useEffect function

    return (
      <div>
        {statesForTableFilter}
      </div>
  ); // ends return
}; // ends FetchStatesForTableFilter function


export { FetchStatesForTableFilter };
