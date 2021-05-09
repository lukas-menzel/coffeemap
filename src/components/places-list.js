import React, { useEffect, useState } from "react";
import { Places } from "./Places"

function PlacesList(props) {
    const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("api/place").then(response =>
      response.json().then(data => {
        setPlaces(data.places);
      })
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <Places places={places} />
    </div>
  );
}

export default PlacesList;
