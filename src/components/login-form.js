import React, { useState } from "react";
import {login, useAuth, logout} from "../auth"


export default function Login() {
    
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const [logged] = useAuth();
  
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed login")
      let opts = {
        'email': email,
        'password': password
      }
      console.log(opts)
      fetch('/api/auth/login', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
        .then(token => {
          if (token.access_token){
            login(token)
            console.log(token)          
          }
          else {
            console.log("Please type in correct username/password")
          }
        })
    }
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
  
    return (
      
      <div>
        {!logged? <form action="#">
          <div>
          <div className="mb-3 pt-0">
            <input type="text" 
              placeholder="email" 
              onChange={handleUsernameChange}
              value={email} 
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
            </div>
          </div>
          <div>
          <div className="mb-3 pt-0">
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
            </div>
          </div>
          <button onClick={onSubmitClick} type="submit" className="inline-flex rounded-md shadow">
          
            <div className="cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500">Login now</div>
          </button>
        </form>
        : 
        <button onClick={() => logout()} className="w-full inline-flex rounded-md shadow">
          
            <div className="cursor-pointer w-full inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500">Logout</div>
          </button>
        }
      </div>
    )
  }
