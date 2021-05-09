import React, {useState, useEffect} from "react";
import {
  useParams
} from "react-router-dom";

export const SinglePlace = () => {
    const { id } = useParams()
    const [places, setPlaces] = useState([]);
  
    useEffect(() => {
      fetch(`/api/place/${id}`)
        .then(response => response.json())
        .then(data => setPlaces(data))
    }, [id])
  
    return (
    <div>
      {places.length >0 && places.map(data => <div>{data.place.name}</div>)}
      </div>
   )
}
