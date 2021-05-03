import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Places } from "./components/Places";
import { PlacesForm } from "./components/PlacesForm";
import { Container } from "semantic-ui-react";
import {login, authFetch, useAuth, logout} from "./auth"


const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/secret" component={Secret} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("api/place").then(response =>
      response.json().then(data => {
        setPlaces(data.places);
      })
    );
  }, []);

  return (
    <Places places={places} />
  )
}

function Login() {
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
      <h2>Login</h2>
      {!logged? <form action="#">
        <div>
          <input type="text" 
            placeholder="email" 
            onChange={handleUsernameChange}
            value={email} 
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <button onClick={onSubmitClick} type="submit">
          Login Now
        </button>
      </form>
      : <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

function Secret() {
  const [message, setMessage] = useState('')
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("api/place").then(response =>
      response.json().then(data => {
        setPlaces(data.places);
      })
    );
  }, []);

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
<PlacesForm
        onNewPlace={place =>
          setPlaces(currentPlaces => [place, ...currentPlaces])
        }
      />
  )
}
