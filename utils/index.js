import mongoose from "mongoose"; 
import jwt from "jsonwebtoken"; 

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("DB Connection Established."); 
  } catch (error) {
    console.log("DB Errorr: " + error); 
  }
}; 

export const createJWT = (res, userId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "1d"}); 

  res.cookie("token", token, {
    httpOnly: true, 
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", 
    maxAge: 1 * 24 * 60 * 60 * 1000, 
  })
};

export default dbConnection; 

