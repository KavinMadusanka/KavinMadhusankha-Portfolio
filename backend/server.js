import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//import routes
import connectDB from "./config/db.js";

//configure environment
dotenv.config();

//connect Database
connectDB();

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // FRONTEND URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet({crossOriginResourcePolicy: { policy: "cross-origin" }}));

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Kavin Madhusankha-Portfolio"
    })
});


//call the port number
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE}`.bgCyan.white);
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
})