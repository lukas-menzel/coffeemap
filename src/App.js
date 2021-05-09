import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";
import {useAuth} from "./auth"
import Registration from "./pages/registration";
import CreatePlace from"./pages/create-place";
import PlacesPage from "./pages/places"
import Footer from "./components/footer";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { SinglePlace } from "./components/SinglePlace"
import Nav from "./components/Nav";

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
      <header>
        <Nav />
      </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/places">
            <PlacesPage />
          </Route>
          <PrivateRoute path="/create-place">
            <CreatePlace />
          </PrivateRoute>
          <Route path='/:id'>
            <SinglePlace />
          </Route>
          <Route path="/" >
            <HomePage />
          </Route>
        </Switch>
        <Footer />
        
    </Router>
  
  );
}

// // function Home() {
// //   const [places, setPlaces] = useState([]);

// //   useEffect(() => {
// //     fetch("api/place").then(response =>
// //       response.json().then(data => {
// //         setPlaces(data.places);
// //       })
// //     );
// //   }, []);

// //   return (
// //     <div>
// //       <Places places={places} />
// //       <RegisterForm />
// //     </div>
// //  )
// // }

// function Secret() {
//   const [message, setMessage] = useState('')
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     fetch("api/place").then(response =>
//       response.json().then(data => {
//         setPlaces(data.places);
//       })
//     );
//   }, []);

//   useEffect(() => {
//     authFetch("/api/auth/protected").then(response => {
//       if (response.status === 401){
//         setMessage("Sorry you aren't authorized!")
//         return null
//       }
//       return response.json()
//     }).then(response => {
//       if (response && response.message){
//         setMessage(response.message)
//       }
//     })
//   }, [])
//   return (
// <PlacesForm
//         onNewPlace={place =>
//           setPlaces(currentPlaces => [place, ...currentPlaces])
//         }
//       />
//   )
// }
