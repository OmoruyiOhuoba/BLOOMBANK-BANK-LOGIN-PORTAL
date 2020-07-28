import React from "react";
import BloomImg from "../assets/BloomImg.png";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <div className="second">
            <img className="secondBloomImg"src={BloomImg} alt="Bloom Bank Logo"/>
           
            <p className="text-second"><b>Register </b>an account with us today to save your money and your future here at the world's number 1 bank!</p>
            <p className="text-third">Create an account by clicking sign up or login to your account below</p>
            <br/>
        
            <button><Link to="/register" className="button-link">Sign Up</Link></button> <br/> <br/> <button> <Link to="/login" className="button-link">Log in</Link></button>
            </div>
        </div>
    )
}

export default Home