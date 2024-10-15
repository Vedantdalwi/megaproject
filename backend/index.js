import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user.route.js";
import policyRoute from "./routes/policy.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption)); 

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/policy", policyRoute);


app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at port ${PORT}`);
});
