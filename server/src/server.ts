//importing files and functions
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDb from "./config/dbConnection";
import shortUrl from "./routes/shortUrl";


//assigning function
const app = express();

//function use
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/", shortUrl);
app.use(
    cors({
        origin: "http://localhost:5000",
        credentials: true
    })
)

//external function call
connectDb();

//constant
const port = 5000;


//listening
app.listen(port, () => {
    console.log(`Server is running on: Port-${port}`)
});