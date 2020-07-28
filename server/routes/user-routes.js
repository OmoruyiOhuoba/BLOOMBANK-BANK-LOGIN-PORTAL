const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user-schema");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

router.route("/register").post((req,res) => {

    const {errors, isValid} = validateRegisterInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
    .then((user) => {
        if(user){
            return res.status(400).json({email: "email already exists"});
        }else {
            const newUser =  new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, hash) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then((User) => {res.json(User)})
                    .catch(err => console.log(err))
                })
            })
        }
    })
    .catch(err => {console.log(err)})
});

router.route("/login").post((req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne([email])
    .then(user => {
        if(!user){
            return res.status(404).json({email: "email Not Found"})
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                const payload = {
                    id : user.id,
                    name : user.name
                };

                jwt.sign(payload, "secret", {expiresIn: 31556926}, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer" + token
                    });
                })
            }else {
                res.status(400).json({passwordIncorrect: "Password Incorrect"});
            }
        })
        .catch(err => {console.log(err)})
    }).catch(err => {console.log(err)})
});

module.exports = router;

