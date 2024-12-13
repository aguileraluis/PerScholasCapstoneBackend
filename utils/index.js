import mongoose from "mongoose"; 

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("DB Connection Established."); 
  } catch (error) {
    console.log("DB Errorr: " + error); 
  }
}; 

export default dbConnection; 