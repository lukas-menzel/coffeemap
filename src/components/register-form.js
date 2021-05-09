import React from "react";
import { useForm } from "react-hook-form";


export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch('/api/auth/user', {
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
      <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" {...register("first_name", { required: true})} placeholder="First Name" />
      <div className="text-red-500 text-sm py-1">{errors.first_name && "First name is required"}</div>
      </div>
      <div className="mb-3 pt-0">
      <input {...register("last_name", { required: true})} placeholder="Last Name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.last_name && "Last name is required"}</div>
      </div>
      <div className="mb-3 pt-0">
      <input {...register("email", { required: true})} placeholder="Email-Adress" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.email && "email is required"}</div>
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
    <i className="fas fa-lock"></i>
  </span>
      <input {...register("password", { required: true})} type="password" placeholder="Password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      <div className="text-red-500 text-sm py-1">{errors.password && "A password is required"}</div>
      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("data_privacy_accepted", { required: true})}  className="form-checkbox h-5 w-5"/><span className="ml-2">I have read and agree to the data privacy policy.</span>
      </label>
      <div className="text-red-500 text-sm py-1">{errors.data_privacy_accepted && "Please accept the data privacy. "}</div>

      </div>
      <div className="mb-3 pt-0">
      <label className="inline-flex items-center mt-3">
      <input type ="checkbox" {...register("email_marketing_accepted", { required: true})}  className="form-checkbox h-5 w-5"/><span className="ml-2">I want to subscribe to the coffeemap newsletter.</span>
      </label>
      <div className="text-red-500 text-sm py-1">{errors.email_marketing_accepted && "Please subscribe to the newsletter. "}</div>

      </div>
      
      <input type="hidden" value="admin" {...register("roles", { required: true})} placeholder="Roles" /> 
      <div className="inline-flex rounded-md shadow">
      <input type="submit" className="cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500" />             
          </div>
    </form>
  );
}
