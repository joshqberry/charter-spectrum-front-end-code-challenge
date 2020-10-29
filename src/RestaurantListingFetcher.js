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
      <div className="data-container">
        <ul>
          <li className="tableHeader">
            <h2>Restaurant name</h2>
          </li>
          <li className="tableHeader">
            <h2>City</h2>
          </li>
          <li className="tableHeader">
            <h2>State</h2>
          </li>
          <li className="tableHeader">
            <h2>Telephone number</h2>
          </li>
          <li className="tableHeader">
            <h2>Genre</h2>
          </li>
        </ul>
        <ul>
          {listings.map((listing, index) => {
            return (
              <div index={index}>
                <ul>
                  <li className="restaurantName">
                    <h4>{listing.name}</h4>
                 </li>
                 <li className="restaurantCity">
                    <h4>{listing.city}</h4>
                  </li>
                  <li className="restaurantState">
                    <h4>{listing.state}</h4>
                  </li>
                  <li className="restaurantTelephone">
                    <h4>{listing.telephone}</h4>
                  </li>
                  <li className="restaurantGenre">
                    <h4>{listing.genre.replace(/,/g, ', ')}</h4>
                  </li>
                </ul>
              </div> )
            }) //ends map function
          }
        </ul>
      </div>
    ); // ends return
  }; // end RestaurantListingFetcher function

export { RestaurantListingFetcher };
