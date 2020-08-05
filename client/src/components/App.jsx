import React from "react";
import {Provider} from "react-redux";
import store from "../store";
import LogoHeader from "./Layout/LogoHeader";
import Footer from "./Layout/Footer";
import Home from "./Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard";
import {Router, Switch,Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();




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
                <Route path = "/dashboard" component = {Dashboard}/>
            </Switch>
            </Router>
            <Footer />
            </Provider>

    )
}

export default App;