import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config(); 

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
