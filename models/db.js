// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     // await mongoose.connect('mongodb+srv://rehman:1234567891@cluster0.yk51c2c.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0');
//     await mongoose.connect('mongodb+srv://abdullah384858:rahman%40123@cluster0.dmpovik.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0');
//     console.log(" Database connection successful");
//   } catch (error) {
//     console.error(" Database connection failed:", error);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://abdullah384858:rahman384858@cluster0.dmpovik.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = connectDB;
