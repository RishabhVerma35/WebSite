import express from "express";


const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.post("/signup",(req,res)=>
    {
        const body = req.body;
        console.log(body);
    });


app.listen(port,()=>
    {
        console.log("The server is listening!");
    })