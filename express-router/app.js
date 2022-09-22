import express from "express";

const app = express();

const port = 5000;


//JSON BODY PARSER
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).json({ success: "Welcome to the Tasky"})

})

app.listen(port, () => {
    console.log("Server Started at Port", port);
})
         