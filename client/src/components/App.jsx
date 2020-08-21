import React, {useEffect} from "react";
import {Router,Route, Switch, Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {setCurrentUser, logoutUser} from "../actions/authActions";

import {Provider} from "react-redux";
import store from "../store";

import {history} from "./helper/history";
import PrivateRoute from "./Private-route/PrivateRoute";
import Home from "./Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import LogoHeader from "./Layout/LogoHeader";
import Footer from "./Layout/Footer";

{/*keep user logged in */}
if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);
  
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    
    const currentTime= Date.now() / 1000;
    if (decoded.exp < currentTime){
        store.dispatch(logoutUser());
  
        window.location.href = "./login";
    }
  
  
  }


const App = () => {

    return (
         <Provider store={store}>
            <Router history={history}>     
                <LogoHeader />
            
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/home" component = {Home}/>
                    <Route path = "/register" component = {Register}/>
                    <Route path = "/login" component = {Login}/>
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            </Router>
            <Footer />
        </Provider>            

    )
}

export default App;