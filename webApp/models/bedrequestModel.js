const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    patient_name:String,
    patient_contact:String,
    patient_aadhar_number:String
});

const Bedrequests = mongoose.model('bedrequests',schema)

module.exports = Bedrequests