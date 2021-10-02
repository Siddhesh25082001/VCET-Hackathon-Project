// Importing required files
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Patient = require('./models/patientModel');
const Facility = require('./models/facilityModel');
const Bed = require('./models/bedModel');
const Admission = require('./models/admissionModel');
const Bedrequest = require('./models/bedrequestModel');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const User = require('./models/newUser');

// express object
const app = express();

// Initialize passport.js Function
require('./config/newPassport')(passport);   

// Connecting to MongoDB Database
const conn_string = 'mongodb+srv://rahul:rahul@cluster0.rb9pz.mongodb.net/covid?retryWrites=true&w=majority';


// Handling the try catch MongoDB Atlas connection
mongoose.connect(conn_string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Atlas Database Successfully"))
    .catch((err) => console.log("Error : ", err));


// PORT
const PORT = 3000;

// Setting view engine
app.set('view engine', 'ejs');

// Setting Static Path
app.use(express.static('static'));



// Body- Parser
app.use(express.urlencoded({ extended: false }));

// Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Use Connect Flash
app.use(flash());

// Global variables - Store success and error messages 
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Root
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/allotment', async (req, res) => {
    let data = await Patient.find();
    let facilities = await Facility.find();

    res.render('allotment', {
        'patients': data,
        'facility': facilities,
        'user':req.user
    });
});

// Approve Bed endpoint
app.post('/approveBed', (req, res) => {
    const { facility_id, bed_type } = req.body;
    const patient_id = req.body.patient_id;
    res.redirect('/allotment');
});

app.get('/dashboard', (req, res) => {
    let beds_data = [
        { "occupied": 30, "total": 60, "perc": 0.5, "colorcode": '#008000' },
        { "occupied": 10, "total": 50, "perc": 0.2, "colorcode": '#008000' },
        { "occupied": 7, "total": 10, "perc": 0.7, "colorcode": '#ffdd00' },
        { "occupied": 4, "total": 5, "perc": 0.8, "colorcode": '#ff0000' },

        { "occupied": 76, "total": 80, "perc": 0.95, "colorcode": '#ff0000' },
        { "occupied": 60, "total": 80, "perc": 0.75, "colorcode": '#ffdd00' },
        { "occupied": 7, "total": 70, "perc": 0.1, "colorcode": '#008000' },
        { "occupied": 9, "total": 15, "perc": 0.6, "colorcode": '#008000' },
    ]


    res.render('dashboard', {
        'beds_data': beds_data
    });
});

app.get('/dashboard/facility', (req, res) => {
    res.render('dashboard_facility')
});

app.get('/dashboard/patients', (req, res) => {
    res.render('dashboard_patients')
});

app.get('/login',(req,res) => {
    res.render('login');
});

// New User Registration
app.post('/register', (req, res) => {
    
    const { name, role } = req.body;

    var password = req.body.password;
    
    if (password.length < 6) {
        req.flash('error', 'Password Length should be greater than 5 !!');
        return res.redirect('/');
    }
    User.findOne({ name: name })
        .then(user => {
            if (user) {
                req.flash('error', 'User with this email already exists !!');
                res.redirect('/');
            }
            else {   
                const saltRounds = 10;  // Higher the salt value, more time for hashing

                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                         if(err) throw err;
                         else{
                            password = hash;
                            const newRecord = new User({
                                name,
                                password,
                                role
                            });
                            newRecord.save();
                            req.flash("success","Registration Successfull, Login with your username and Password !!");
                            res.redirect("/login");
                         }
                    });
                });  
            }
        });
});

// User Login
app.get('/login', (req, res) => {
    res.render('login')
});



app.post('/login', passport.authenticate('userLogin',{
        failureRedirect:'/login',
        failureFlash:true
    }),
    function(req, res) {
    if(req.user.role == "0") return res.redirect('/allotment')
    else res.redirect('/callform');

});


// User Logout
app.get('/logout', (req, res) => {
    req.logout();
    req.flash('success','You Logged Out Successfully')
    res.redirect('/');
});


app.get('/allotment/facilities',async (req,res) => {
    let facilities = await Facility.find();
    res.render('facilities',{
        facilities:facilities
    });
});
app.get('/allotment/patients',(req,res) => {
    res.render('patients');
});

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Listening On port ${PORT}`);
});

// CALLL FORM

app.get('/callform',async (req,res) => {
    let data = await Bedrequest.find();
    let url = "https://siddhesh25082001.github.io/TeleLink/mobile.html"
    res.render('callform',{
        'bedrequests':data,
        'qr_code_link':url
    });
});

app.get('/mobilecallform',async (req,res) => {
    let data = await Bedrequest.find();
    res.render('mobile_callform',{
        'bedrequests':data
    });
});


