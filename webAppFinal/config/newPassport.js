// This is 'passport.js' of Coastal Hacks Hackathon

// Importing Required Modules
const localStrategy = require('passport-local').Strategy;

// const User = require('../models/userModule');
const User = require('../models/newUser')

const bcrypt = require('bcrypt');
const passport = require('passport');

// Passport Module
module.exports = (passport) => {     
    passport.use('userLogin',
        new localStrategy(
            {usernameField: 'name'}, (name, password, done) => {
            User.findOne({name: name})
            .then(user => {
                if(!user){
                    
                    return done(null, false, {message: 'User with this username does not exist'}); 
                }

                // Password Matching
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                      
                        return done(null, user);
                    } 
                    else {
                        return done(null, false, {message:'Wrong Password'});
                    }
                });
            })
            .catch(err => console.log(err));
        })
    )
};

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
});