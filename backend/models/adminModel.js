const mongoose = require('mongoose')
const { Schema } = mongoose;

const adminSchema = new Schema({
    username: { 
        type: String, 
        unique: true 
    },
    password: String
});

const adminModel = mongoose.model('Admin', adminSchema);

module.exports = adminModel;
