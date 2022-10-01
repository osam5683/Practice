 import mongoose from "mongoose";
 import config from "config";
 async function connedtionDB(){
    try {
        await mongoose.connect(config.get("DBI_URI"))
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
        
    }
 }
 connectDB();