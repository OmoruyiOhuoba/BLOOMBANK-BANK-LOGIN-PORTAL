import React from "react";
import LogoHeader from "./Layout/LogoHeader";
import Footer from "./Layout/Footer";
import Home from "./Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>     
            <LogoHeader />
            
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route path = "/home" component = {Home}/>
                <Route path = "/register" component = {Register}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/dashboard" component = {Dashboard}/>
            </Switch>
            </Router>
            <Footer />

        </div>
    )
}

export default App;