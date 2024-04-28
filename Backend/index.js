import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";
dotenv.config({ path: "./config/config.env" });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.get('/', (req, res)=>{
    res.status.send("Hello world")
})

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT,()=>{
console.log(`Server Running On Port ${process.env.PORT}`);
});

