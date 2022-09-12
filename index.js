const express = require('express');
const moment = require('moment');
const app = express();
const port = 4000;
// const Date= new Date();


app.set("view engine", "ejs");

app.get("/ourservices", (req, res) => 
res.render("ourservices"));

app.get("/contact", (req, res) =>
 res.render("contactus"));


app.get("*", (req, res) =>{
if (
    moment().day() >= 1 &&
    moment().hours() >= 9 &&
    moment().day() <= 5 &&
    moment().hours() <= 17
  ) {
    res.render("home")
  }
   else {
    
      res.status(400);
      res.send(
        "<h1>The web application is only available in working time (Monday to Friday,  from 9 to 17) </h1>"
      );
    }});


// app.get('/contact', (req, res) => res.send('mar7abtin ahlin ya hbayb'));
// 
app.listen(port,(err)=> err?console.log(err):
console.log ('oumourna mriglaaaa'));

