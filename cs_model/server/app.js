import http from "http";
import url from "url";
import {SringDecoder} from "string_decoder"

constport = 5000;

const server = http.createServer((req,res)=>{


    //GET THE URL and Parse it
    const parsedURL = url.parse(req.url,true);
    console.log(parsedURL);

    const path = parsedURL.path;

    // Trimmed path
    const trimmedPath = path.path('/').filter((ele)=> ele !="").join("/");
    console.log(trimmedPath);

    // Method HTTP
    const method=req.method;
    console.log(method);


    // Query Parameters
    const queryObjects=parsedURL.query;
    console.log(queryObjects);

    // Get Headers
    console.log(req.headers);

    const decoder = new StringDecoder('utf-8');
    let bodybuffer='';
    req.on('data',(data)=>{
        bodybuffer+=decoder.decoder.write(data);
    })
    req.on('end',()=>{
        bodybuffer+=decoder.end();
        console.log
    })

})