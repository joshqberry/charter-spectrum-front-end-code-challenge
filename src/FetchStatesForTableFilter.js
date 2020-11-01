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
        {statesForTableFilter.map((filterOptionForState, index) => {
          return (
              <CheckboxesForStateFilter
                index={index}
                state={filterOptionForState}
              />
          ); // ends return
        })}; // ends map function
      </div>
    ); // ends return

  }; // ends FetchStatesForTableFilter function


  const CheckboxesForStateFilter = ({ state }) => {
    return (
      <div className="checkboxDiv">
        <label>
          <input type="checkbox" rel={state} className="stateCheckboxes"/>
          <h5 className="thisStateIsVisible">{state}</h5>
        </label>
      </div>
    ); // ends return
  }; // ends CheckboxesForStateFilter function


export { FetchStatesForTableFilter };
