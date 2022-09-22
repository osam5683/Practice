import express from "express";

const app = express();

//connect db
import "./dbConnect.js";


//Import MongoDB Model
import hotelModel from "./models/Hotels.js";
const port = 5500;


app.use(express.json());
app.get("/", (req, res) => {
    res.send("SERVER IS UP")
})


//booking route
app.post("/booking",async (req, res)=>{
    try{
        //console.log(req.body);
        let bboking_data = new hotelModel(req.body);
        await_booking_data.save();
        //console.log(booking_data);
        res.status(200).json({"success":"Route is Working"})
    }catch (error){
        console.error(error);
        res.status(500).json({"error":"Internak Server Error"})
    }
})

app.listen(port, (req, res) => {
    console.log("Server Started at Port ", port);
})




