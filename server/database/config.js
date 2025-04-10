const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://hr:123@calendar.amoutps.mongodb.net/?retryWrites=true&w=majority&appName=calendar", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;

 