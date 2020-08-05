import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import classnames from "classnames";
import {loginUser, setCurrentUser} from "../../actions/authActions";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Login = () => {

const [userData, setUserData] = useState({
    email: "",
    password: "",
    errors:{},
});

const dispatch = useDispatch();

const { auth, errors } = useSelector(state => ({
  auth: state.auth,
  errors: state.errors,
}));  


    const HandleChange = (event) => {
        const {name, value} =event.target;

        setUserData(prevData => {
            return {
                ...prevData, [name]: value
            }
        });

        console.log(userData);
    }

    const HandleSubmit = (event) => {
        event.preventDefault();

        if(userData.email && userData.password && userData.errors){
          dispatch(loginUser(userData))
          
        }
        console.log(userData);

    if(auth.isAuthenticated){
        history.push("dashboard")
      
    }

    }


  
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect" style={{ paddingRight: "410px" }}>
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s0" style={{ paddingLeft: "11.250px" }}>
              <h4 style={{ paddingRight: "40px" }}>
                <b>Log in</b> below
              </h4>
              <p className="grey-text text-darken-1" style={{ paddingRight: "9px" }}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate >
              <div className="input-field col s12">
                <input
               onChange={HandleChange}
               name="email"
               type="email"

                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                onChange={HandleChange}
                name="password"
                type="password"

                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"   
                  onClick={HandleSubmit}  
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Login;