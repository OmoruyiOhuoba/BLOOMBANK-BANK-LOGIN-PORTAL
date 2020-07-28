const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports =  validateRegisterInput = data => {
    
    let errors ={};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)){
        return error.name("Name field is required");
    };


    if(Validator.isEmpty(data.email)){
        return error.email("Email field is required");
    } else if(!Validator.isEmail(data.email)){
        return error.email("email is invalid")
    }

    if (Validator.isEmpty(data.password)){
        return error.password("password is reuired");
    }

    if (Validator.isEmpty(data.password2)){
        return error.password2("confirming the password is required");
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})){
        return error.password("Password must be between 6 and 30 characters")
    }

    if(!Validator.isEqual(data.pasword2)){
        return error.password("passwords must match")
    }


return{
    errors,
    isValid: isEmpty(errors)
}

}
