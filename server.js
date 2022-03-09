import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/users.js";
import requestsRoutes from "./routes/productRequests.route.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/users", userRoutes);
app.use("/productrequests", requestsRoutes);

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
