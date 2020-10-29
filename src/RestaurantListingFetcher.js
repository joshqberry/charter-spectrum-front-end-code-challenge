import React, {useEffect, useState} from "react";
import App from "./App.css"

  const RestaurantListingFetcher = () => {

    const [listings, setListings] = useState([]);

    useEffect(() => {

      const getListings = async () => {
        const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
        {
          headers: {Authorization: process.env.REACT_APP_RESTAURANT_LISTINGS_API_KEY},
        });

        const jsonResponse = await response.json();

        setListings(jsonResponse);

      } // ends getListings

      getListings();

    }, []); // ends useEffect

  return (
      <div>
        <h1>These are the listings</h1>
        <ul>
        {
          listings.map((listing, index) => {
            return ( <div
              key={'${listing.name}'}>
              {listing.name}
              {listing.city}
              {listing.state}
              {listing.telephone}
              {listing.genre}
            </div> )
          }) //ends map function
        } // ends JSX wrapper
        </ul>
      </div>
    ); // ends return
  }; // end RestaurantListingFetcher function


export { RestaurantListingFetcher };
