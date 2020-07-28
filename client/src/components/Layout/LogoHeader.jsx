import React from "react";
import BloomImg from "../../assets/BloomImg.png";
import {Link} from "react-router-dom";

const LogoHeader = () => {
    return(
        <div>
        <div className="first">
            <Link to="/home" className="link">
            <img className="firstBloomImg"src={BloomImg} alt="Bloom Bank Logo"/>
            <p className="firstBankName">Bloombank</p>
            </Link>
            </div>
        </div>
    )
}

export default LogoHeader;