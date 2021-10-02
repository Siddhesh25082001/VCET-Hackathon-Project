const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    name:String,
    contact:String,
});

const Bedrequests = mongoose.model('bedrequests',schema)

module.exports = Bedrequests