import React, {useEffect, useState} from "react";
import App from "./App.css"

  const FetchGenresForTableFilter = () => {

    const [genresForTableFilter, setGenresForTableFilter] = useState([]);

    useEffect(() => {

      const fetchGenresForTableFilter = async () => {
        const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
        {
          headers: {Authorization: process.env.REACT_APP_RESTAURANT_LISTINGS_API_KEY},
        });

        let jsonResponse = await response.json();

        let arrayOfGenres = jsonResponse.map(x => x.genre);

        let joinGenres = arrayOfGenres.join(', ');

        let joinGenresRemoveSpaces = joinGenres.replace(/\,\s/g, ",");

        let joinGenresStandardizeSpacing = joinGenresRemoveSpaces.replace(/\,/g, ", ");

        let arrayOfIndividualGenres = joinGenresStandardizeSpacing.split(', ');

        let arrayOfUniqueGenres = [...new Set(arrayOfIndividualGenres)];

        let arrayOfUniqueGenresSorted = arrayOfUniqueGenres.sort();

        setGenresForTableFilter(arrayOfUniqueGenresSorted);

      } // ends fetchGenresForTableFilter function

      fetchGenresForTableFilter();

    }, []); // ends useEffect function

    return (
      <div>
        {genresForTableFilter}
      </div>
  ); // ends return
}; // ends FetchStatesForTableFilter function


export { FetchGenresForTableFilter };
