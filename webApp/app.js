// Importing required files
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Patient  = require('./models/patientModel');
const Facility  = require('./models/facilityModel');
const Bed  = require('./models/bedModel');
const Admission = require('./models/admissionModel');
const Bedrequest = require('./models/bedrequestModel');

// express object
const app = express();

// Connecting to MongoDB Database
const conn_string = 'mongodb+srv://rahul:rahul@cluster0.rb9pz.mongodb.net/covid?retryWrites=true&w=majority';



// Handling the try catch MongoDB Atlas connection
mongoose.connect(conn_string, { useNewUrlParser:true, useUnifiedTopology:true})
    .then( () => console.log("Connected to Atlas Database Successfully"))
    .catch( (err) => console.log("Error : ", err));


// port
const PORT = 3000;

// Setting view engine
app.set('view engine','ejs');

// Setting Static Path
app.use(express.static('static'));

// Root
app.get('/',(req,res) => {
    res.render('index');
});

app.get('/allotment',async (req,res) => {
    let data = await Patient.find();
    res.render('allotment',{
        'patients':data
    });
});

app.listen(process.env.PORT || PORT,(req,res) => {
    console.log(`Listening On port ${PORT}`);
});

