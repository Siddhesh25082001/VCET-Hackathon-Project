const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    bed_type:String,
    facility_id:String,
    covid_bed:Boolean,
    occupied:Boolean,
    patient_id:String
});

const Bed = mongoose.model('beds',schema)

module.exports = Bed
