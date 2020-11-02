import React, {useEffect, useState} from "react";
import App from "./App.css"

  function useRestaurantListingFetcher() {

    const [listings, setListings] = useState([]);

    useEffect(() => {

      const getListings = async () => {
        const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
        {
          headers: {Authorization: process.env.REACT_APP_RESTAURANT_LISTINGS_API_KEY},
        });

        let jsonResponse = await response.json();

        let sortedJSONResponse = jsonResponse.sort(function (restaurantNameA, restaurantNameB) {
          if (restaurantNameA.name > restaurantNameB.name) return 1;
          if (restaurantNameA.name < restaurantNameB.name) return -1;
        })

        setListings(sortedJSONResponse);

      } // ends getListings function

      getListings();

    }, []); // ends useEffect function

    return listings;

  }; // ends RestaurantListingFetcher function

export { useRestaurantListingFetcher };
