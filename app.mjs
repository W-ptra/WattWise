import express from "express";
import cors from "cors";
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.static("web"));

app.get('/',(req,res)=>{
    res.status(200).send("<h1>WattWiser</h1>")
});

// app.post('/calculate',(req,res)=>{
//     const obj = req.body;
// });

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
});