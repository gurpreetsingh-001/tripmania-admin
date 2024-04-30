const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Url)
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDb