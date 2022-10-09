import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://ossama_:@Akhe786@akheelcluster.rdsrpja.mongodb.net/tasky")

        console.log("Mongodb is connected");
    } catch (error) {
        console.log(error);
    }
}

connectDB(); 
