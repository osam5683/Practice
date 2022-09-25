import express from "express";

//Initiate express
const app = express();

//Allot port numer
const port = 5050;

//checks if the body is coming in valid json format
app.use(express.json());

//GET method
app.get("/", (req, res)=> {
    console.log("i am in express server");
    //never use req.body in GET 
    //console.log(req.body);
    //send response to the server
    //setTimeout(()=> {
        //res.send("<h1>Hi from express server GET Method</h1>");
    // },4000);
    res.send("<h1>Hi from expres GET METHOD</H1>");
    //note you cannothave more than 1 res.send
})

app.posts("/home/api", (req, res)=>{
    res.send("i am in gome API");
})

// app.post("/home/api", async (req, res) => {
//     try {
//         let data = req.body;
//         await fs.writeFile("data.json", JSON.stringify(data));
//         res.status(200).json({ error: "File Has Been Written" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })

//POST METHOD 
app.post("/home/:id",(req, res)=>{
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    res.send("i am coming from POST Method adnan route");
})

//use - works on all HTTP Req methods
//app.use("/", (req, res)=>{
//     console.log(req.method);
//     res.send("welcome to express")
// })

//listen to the request
app.listen(port,()=> {
    console.log("server started at port", port);
})