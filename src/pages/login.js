import React, { Component } from "react";
import Login from "../components/login-form"

class LoginPage extends Component {
    render() {    
        return (
<div className="flex items-center justify-center bg-gray-50 py-48 px-4">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or 
           <a href="/register" className="font-medium text-green-400 hover:text-green-500">
              <span> register for free</span>
          </a>.
        </p>
      </div>
      <Login />
    </div>
  </div>
    );
}
}
export default LoginPage;
