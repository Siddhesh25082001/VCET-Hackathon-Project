const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    bed_id:String,
    patient_id:String,
    facility_id:String,
    admission_status:String,
    allotment_date:Date,
    admitted_date:Date,
    discharged_date:Date
});

const Admission = mongoose.model('admissions',schema)

module.exports = Admission


