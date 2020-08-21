import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Dashboard = () => {

    const dispatch = useDispatch();

    const {auth} = useSelector(state => state.auth);


    const HandleLogOut = (event) => {
        event.preventDefault();
        dispatch(logoutUser());

    };

    return(
        <div>
            <h1><b>Hey</b>, **to display username** </h1>
            <p style={{color: "gray"}}>You're logged into your bank account</p>
            <button type= "submit" onClick={HandleLogOut} > Log Out</button>
        </div>
    )
}

export default Dashboard;