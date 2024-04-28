import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const corsOrigin ={
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,        
}
app.use(cors(corsOrigin));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.use('/', (req, res)=>{
    res.send("Hello world")
})

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT,()=>{
console.log(`Server Running On Port ${process.env.PORT}`);
});
