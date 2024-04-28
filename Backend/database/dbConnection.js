import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Connected to database successfully!");
    }).catch((err)=>{
        console.log(`Some Error occured while connecting to database! ${err}`)
    });
};