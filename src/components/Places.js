import React from "react";
import {
  Link
} from "react-router-dom";

export const Places = ({ places }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 w-full">
    <ul className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
      {places.map(place => {
        return (
          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3 my-4 xl:my-8 mx-4">
              <Link to={`${place.id}`}><div className="cursor-pointer p-12 text-center bg-white rounded-md shadow"><h3 className="font-bold text-lg">{place.name}</h3>
              {place.street_house_number}<br />
              {place.postcode} {place.city}</div></Link>
          </div>
          
        );
      })}
    </ul>
    </div>
  );
};
