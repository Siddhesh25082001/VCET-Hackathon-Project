const mongoose = require('mongoose');

// User schema
const schema = new  mongoose.Schema({
    name: String,
    password: String,
    role: String
});


const User = mongoose.model('users',schema);

module.exports = User;