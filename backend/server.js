import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res)=>{
    res.send("Otin123");
});

app.listen(5001, ()=>{
    connectDb();
    console.log("Server started at http://localhost:5001");
});