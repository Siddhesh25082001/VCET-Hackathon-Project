const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    name : String,
    address : String,
    contact_number : String,
    ward : String,
    district : String,
    total_beds_count : Number,
    ordinary_beds_count : Number,
    oxygen_beds_count : Number,
    icu_beds_count : Number,
    ventilator_beds_count : Number,
    last_update_date : Date
});

const Facility = mongoose.model('facilities',schema)

module.exports = Facility




