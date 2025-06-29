const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rehman:1234567891@cluster0.yk51c2c.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0');
    console.log(" Database connection successful");
  } catch (error) {
    console.error(" Database connection failed:", error);
  }
};

module.exports = connectDB;
