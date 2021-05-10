import React, { useState, useEffect } from "react";
import BGImageText from "./bg-image-w-text"
import CTA from "./cta-section";
const SinglePlace = ({ match }) => {
  const {
    params: { id },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [places, SetPlaces] = useState();

  useEffect(() => {
    fetch(`/api/place/${id}`, {})
      .then((res) => res.json())
      .then((response) => {
        SetPlaces(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {!isLoading && (
        <>
        <BGImageText
                headline={places.place.name}
                subheadline="" />
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 w-full">
          <div class="flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-2 xl:-mx-2">
            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
              <h2 className="text-xl font-bold">Address:</h2>
            {places.place.street_house_number}<br />
              {places.place.postcode} {places.place.city}</div>
            </div>

            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
            <h2 className="text-xl font-bold">Contact data:</h2>
            Phone number: {places.place.phone_number}<br />
              E-Mail-Adress: {places.place.email_adress}</div>
            </div>

            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
            <h2 className="text-xl font-bold">Links:</h2>
            <a href="{places.place.website_url}">Website</a><br />
            <a href="{places.place.facebook_url}">Facebook</a><br />
            <a href="{places.place.instagram_url}">Instagram</a><br /></div>
            </div>
            </div>
            <div class="flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-2 xl:-mx-2">
            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
              <h2 className="text-xl font-bold">Prices:</h2>
              Espresso: {places.place.price_espresso}<br />
              Filter coffee: {places.place.price_filter_coffee}<br />
              Cappuccino: {places.place.price_cappuccino}</div>
            </div>

            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
            <h2 className="text-xl font-bold">Further information</h2>
            </div>
            </div>

            <div class="w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div className="h-48 cursor-pointer p-12 text-center bg-white rounded-md shadow">
            <h2 className="text-xl font-bold">Further information</h2>
         </div>
            </div>
            </div>
             </div>
             <CTA />
        </>
      )}
    </>
  );
};
export default SinglePlace;
