const mongoose = require("mongoose");
const mongo_URI = process.env.mongo_URI;
require("dotenv").config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongo_URI);
//   } catch (err) {
//     console.log(err);
//   }
// };

const connectDB = mongoose.connect(mongo_URI);  

module.exports = {
  connectDB,
};
