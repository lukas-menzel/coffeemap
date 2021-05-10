import React, {useState, useEffect} from "react";
import {
  useParams
} from "react-router-dom";

export const SinglePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams()
    const [places, setPlaces] = useState();
  
    useEffect(() => {
      fetch(`/api/place/${id}`, {})
        .then((response) => response.json())
        .then((data) => {
            setPlaces(data.results);
            setIsLoading(false);
        });
    }, [id]);

    console.log(places)
    return (
        <>
        {!isLoading && (
            <>
    <h1>
      </h1>
      </>
      )}
      </>
      
   );
}
