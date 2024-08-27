const mongoose = require("mongoose");
const colors = require("colors");

//function mongoose connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected database ${mongoose.connection.host}`.bgBlue);
  } catch (error) {
    console.log("DB ERROR", error);
  }
};

module.exports = connectDb;
