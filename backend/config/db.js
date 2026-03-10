const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/staysphere");
    console.log("Database connected");
  } catch (error) {
    console.error("Something went wrong in Db");
  }
};

module.exports = connectDb;
