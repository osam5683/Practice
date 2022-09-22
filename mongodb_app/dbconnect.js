import  mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://ossama_:%40Akhe786@akheelcluster.rdsrpja.mongodb.net/test")
        console.log("Mongo DB is Connected")
    }catch (error) {
        console.log("error");
    }
}
connectDB();