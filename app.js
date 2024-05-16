const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;
require("dotenv").config();
const server_name = process.env.SERVER_NAME;

app.set("view engine","ejs");
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.static("views"));

app.get('/',(req,res)=>{
    res.status(301).redirect("/home")
});

app.get('/home', (req, res) => {
    //res.sendFile('home/home.html', { root: __dirname + '/web' });
    res.status(200).render('home/home',{server_identity: server_name});
});

app.get('/service', (req, res) => {
    //res.sendFile('second_page/index.html', { root: __dirname + '/web' });
    res.status(200).render('service/index',{server_identity: server_name});
});

app.get('/product', (req, res) => {
    //res.sendFile('product/product.html', { root: __dirname + '/web' });
    res.status(200).render('product/product',{server_identity: server_name});
});
app.get('/contact', (req, res) => {
    //res.sendFile('contact/contact.html', { root: __dirname + '/web' });
    res.status(200).render('contact/contact',{server_identity: server_name});
});

app.listen(port,"0.0.0.0",()=>{
    console.log(`Listening to port:${port}`);
});