const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    // other user information fields
});

module.exports = mongoose.model('User', userSchema);