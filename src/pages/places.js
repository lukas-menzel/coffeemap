import React, { useState, useEffect } from "react";
import { Places } from "../components/Places";
import BGImageText from "../components/bg-image-w-text";
import H2 from "../components/h2";

function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("api/place").then(response =>
      response.json().then(data => {
        setPlaces(data.places);
      })
    );
  }, []);

  return (
    <div>
                        
    <BGImageText
                headline="All Places"
                subheadline="Discover interesting cafés in Berlin." />
                <div className="py-16"><H2 h2="All places" />
      <Places places={places} />
      </div>
    </div>
 )
}

export default PlacesPage;
