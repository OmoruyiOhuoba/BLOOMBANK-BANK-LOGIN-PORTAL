import {SET_CURRENT_USER, USER_LOADING, GET_ERRORS} from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";


export const registerUser = (userData, history) => dispatch => {

    axios
      .post("http://localhost:3000/users/register", userData)
      .then(res => history.push("/login")) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  // Login - get user token
  export const loginUser = userData => dispatch => {
    axios
      .post("http://localhost:3000/users/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

export const setCurrentUser = decoded => {
        return {
            type: SET_CURRENT_USER,
            payload: decoded
        };
    };

 export const setUserLoading = () => {
        return {
            type: USER_LOADING
        };
    };

export const logoutUser = () => dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(setCurrentUser({}));
    };


