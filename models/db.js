const mongoose = require("mongoose");
require('dotenv').config(); // Make sure this is at the top

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
};

module.exports = connectDB;
