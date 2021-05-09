import React, { useEffect, useState } from "react"; 
import { authFetch } from "../auth"
import BGImageText from "../components/bg-image-w-text"
import PlacesForm from"../components/PlacesForm"
import H2 from "../components/h2"

function CreatePlace() {
    const [message, setMessage] = useState('')

  useEffect(() => {
    authFetch("/api/auth/protected").then(response => {
      if (response.status === 401){
        setMessage("Sorry you aren't authorized!")
        return null
      }
      return response.json()
    }).then(response => {
      if (response && response.message){
        setMessage(response.message)
      }
    })
  }, [])
   
        return (
            <div>
            <BGImageText
                headline="Coffeemap"
                subheadline="Discover interesting cafés in Berlin." />
                <div className=" flex items-center justify-center bg-gray-50 py-48 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                <H2 h2="Add your favorite café" />

                        <PlacesForm/>
            </div>
            </div>
            </div>
            
            );
}
export default CreatePlace;
        