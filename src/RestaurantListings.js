import React, {useEffect, useState} from "react";
import App from "./App.css"
import { useRestaurantListingFetcher } from "./RestaurantListingFetcher";
import { TableLabels } from "./TableLabels";



const RestaurantListings = () => {

  let listings = useRestaurantListingFetcher();

  return (
    <section className="data-container">
    <TableLabels />
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
          </div>
          ) // ends return
        })} //ends map function
    </ul>
    </section>

  )
  };




export { RestaurantListings };
