import cookieParser from "cookie-parser"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import express from "express"; 
import dbConnection from "./utils/index.js";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewares.js";

const routes = ""; 
dotenv.config(); 

dbConnection()
const PORT = process.env.PORT || 5000; 

const app = express(); 

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], 
  method: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true
})); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); 
app.use(morgan("dev"));  
// app.use("/api", routes)
app.use(routeNotFound); 
app.use(errorHandler); 

// app.use(routeNotFound); 
// app.use(errorHandler); 

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); 