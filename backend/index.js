import express from "express";
import cors from "cors";
import dbconnection from "./db.js";
import userRoute from "./routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const PORT = 8000;

dotenv.config();

dbconnection();

app.use(cors());
app.use(bodyParser.json());
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});