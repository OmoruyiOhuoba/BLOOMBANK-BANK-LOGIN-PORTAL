import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {registerUser} from "../../actions/authActions";
import classnames from "classnames";



const Register = () => {

    const [state, setState] = useState({
    name:"",
    email: "",
    password: "",
    password2:"",
    errors: {}
    });

    const dispatch = useDispatch();
    
    const HandleChange = (event) =>{
        const {name, value} = event.target;
       
            setState(prevValue => {
                return {
                    ...prevValue, [name]: value
                }
            });

            console.log(state);
        
    };

    const HandleSubmit = (event) => {
            event.preventDefault();

            if (state.name && state.email && state.password && state.password2 && state.errors) {
              dispatch(registerUser(state))
             }

    };


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
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1" style={{ paddingRight: "8px" }}>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate >
              <div className="input-field col s12">
                <input
               onChange={HandleChange}
               name="name"
               type="text"
               error={state.errors.name}
               className={classnames("", {
                    invalid: state.errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{state.errors.name}</span>

              </div>
              <div className="input-field col s12">
                <input
                onChange={HandleChange}
                name="email"
                type="email"
                error={state.errors.email}
                className={classnames("", {
                    invalid: state.errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{state.errors.email}</span>

              </div>
              <div className="input-field col s12">
                <input
               onChange={HandleChange}
               name="password"
               type="password"
               error={state.errors.password}
               className={classnames("", {
                    invalid: state.errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{state.errors.password}</span>

              </div>
              <div className="input-field col s12">
                <input
                   onChange={HandleChange}
                   name="password2"
                   type="password"
                  error={state.errors.password2}
                   
                  className={classnames("", {
                    invalid: state.errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{state.errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"   
                  onClick={HandleSubmit}  
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    )
};

export default Register;
