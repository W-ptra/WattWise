const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.static("web"));

app.get('/',(req,res)=>{
    res.status(200).redirect("/home")
});

app.get('/home', (req, res) => {
    res.sendFile('home/home.html', { root: __dirname + '/web' });
});

app.get('/service', (req, res) => {
    res.sendFile('second_page/index.html', { root: __dirname + '/web' });
});

app.get('/product', (req, res) => {
    res.sendFile('product/product.html', { root: __dirname + '/web' });
});
app.get('/contact', (req, res) => {
    res.sendFile('contact/contact.html', { root: __dirname + '/web' });
});



app.listen(port,"0.0.0.0",()=>{
    console.log(`Listening to port:${port}`);
});
