import React, {useEffect, useState} from "react";
import App from "./App.css"


  const TableLabels = () => {

    return (
      <ul>
        <li className="tableHeader">
          <h4>Restaurant name</h4>
        </li>
        <li className="tableHeader">
          <h4>City</h4>
        </li>
        <li className="tableHeader">
          <h4>State</h4>
        </li>
        <li className="tableHeader">
          <h4>Telephone number</h4>
        </li>
        <li className="tableHeader">
          <h4>Genre</h4>
        </li>
      </ul>
    ) // ends return
  }; // ends TableLabels function









export { TableLabels };
