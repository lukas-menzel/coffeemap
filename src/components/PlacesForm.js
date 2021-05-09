import React from "react";
import { useForm } from "react-hook-form";
import { authFetch } from "../auth"



export default function PlacesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    authFetch('/api/place', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => response.json())  
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 pt-0">
      <input {...register("name", { required: true})} placeholder="name of the café" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.name && "A name is required"}</div>
      </div>
      <div className="mb-3 pt-0">
      <input {...register("street_house_number", { required: true})} placeholder="Street and house number" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.street_house_number && "A street and house number is required"}</div>
      </div>
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <div className="mb-3 pt-0">
      <input {...register("postcode", { required: true})} placeholder="Postcode" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.postcode && "Postcode is required"}</div>
      </div>
      </div>
      <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <div className="mb-3 pt-0">
      <input {...register("city", { required: true})} placeholder="City" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.city && "City is required"}</div>
      </div>
      </div>
      </div>
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <div className="mb-3 pt-0">
      <input {...register("phone_number")} placeholder="Phone number" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>
      </div>
      <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <div className="mb-3 pt-0">
      <input {...register("email_adress")} placeholder="E-Mail-Adress" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>
      </div>
      </div>
      <br />
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
          <input {...register("website_url")} placeholder="Website URL" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
        <input {...register("facebook_url")} placeholder="Facebook URL" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
        <input {...register("instagram_url")} placeholder="Instagram URL" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
      </div>
      <br />
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("wifi_available")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Wifi available?</span>
      </label>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("toilet_available")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Toilet available?</span>
      </label>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("power_slots_available")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Power slots available?</span>
      </label>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("alcohol_available")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Alcoholic drinks available?</span>
      </label>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("vegan_alternatives_available")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Vegan alternatives available?</span>
      </label>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("laptops_allowed")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Laptops allowed?</span>
      </label>
      </div>
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <label className="inline-flex items-center mt-3">
          <input type ="checkbox" {...register("open_for_takeaway")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Open for takeaway?</span>
          </label>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <label className="inline-flex items-center mt-3">
          <input type ="checkbox" {...register("open_for_delivery")}  className="form-checkbox h-5 w-5"/><span className="ml-2">Open for delivery?</span>
          </label>
        </div>
      </div>
      <br/>
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
        <input {...register("price_espresso")} placeholder="price for an espresso" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
        <input {...register("price_filter_coffee")} placeholder="price for a filter coffee" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
        <input {...register("price_cappuccino")} placeholder="price for a cappuccino" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
      </div>
      <br />
      <div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <input {...register("wifi_network_name")} placeholder="wifi network name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>

        <div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <input {...register("wifi_network_password")} placeholder="Wifi network password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
</div>
      <br/>
      <div className="inline-flex rounded-md shadow">
      <input type="submit" className="cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500" />             
          </div>
    </form>
  );
}
