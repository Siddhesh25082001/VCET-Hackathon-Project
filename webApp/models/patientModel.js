const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    firstname : String,
    lastname : String,
    aadhar_card_number : String,
    contact : String,
    emergency_contact : String,
    address:String,
    ward:String,
    gender : String,
    date_of_birth : Date,
    disease_status : Boolean,
    last_tested_date : Date,
    vaccinated : Boolean,
    symptoms : Array,
    comorbidities:Array,
    o2_saturation_level:Number,
    home_quarantine:Boolean
});

const Patient = mongoose.model('patients',schema);

module.exports = Patient