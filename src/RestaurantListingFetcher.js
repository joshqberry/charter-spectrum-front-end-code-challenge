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
        <h1>These are the listings</h1>
        <ul>
        {
          listings.map((listing, index) => {
            return ( <div
              index={index}>
              <ul>
                   <li className="restaurantName">
                    <h5>{listing.name}</h5>
                   </li>
                   <li className="restaurantCity">
                     <h5>{listing.city}</h5>
                   </li>
                   <li className="restaurantState">
                     <h4>{listing.state}</h4>
                   </li>
                   <li className="restaurantTelephone">
                     <p>{listing.telephone}</p>
                   </li>
                   <li className="restaurantGenre">
                     <p>{listing.genre}</p>
                   </li>
               </ul>
            </div> )
          }) //ends map function
        } 
        </ul>
      </div>
    ); // ends return
  }; // end RestaurantListingFetcher function


  const Resty = ({ name, city, state, telephone, genre }) => {
  if (!name) return <div />;
  return (
    <div>
       <ul>
            <li className="restaurantName">
             <h5>{name}</h5>
            </li>
            <li className="restaurantCity">
              <h5>{city}</h5>
            </li>
            <li className="restaurantState">
              <h4>{state}</h4>
            </li>
            <li className="restaurantTelephone">
              <p>{telephone}</p>
            </li>
            <li className="restaurantGenre">
              <p>{genre}</p>
            </li>
        </ul>
      </div>
    );
  };



export { RestaurantListingFetcher };
