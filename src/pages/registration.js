import React, { Component } from "react";
import RegisterForm from "../components/register-form";

class Registration extends Component {
    render() {    
        return (
            <div className=" flex items-center justify-center bg-gray-50 py-48 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div>
                
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Register and create your free account.
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
              
                <div className="text-center">
                 Already have an account? <a className="font-medium text-green-400 hover:text-green-500" href="/login">Login</a>
                </div>
                </p>
            </div>
            <RegisterForm />
            </div>
            </div>
    );
}
}
export default Registration;
