const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "../views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/cntct.html", (req, res) => {
    res.render("contactus");
});
app.get("/abtus.html", (req, res) => {
    res.render("aboutus");
});
app.get("/lgin.html", (req, res) => {
    res.render("login");
});
app.get("/New.html", (req, res) => {
    res.render("signup");
});
app.get("FB.html", (req, res) => {
    res.render("FB");
    // res.redirect('makemytrip.com/flights');
});
app.get("/Trip.html", (req, res) => {
    res.render("Seemore");
});

app.listen(port, () =>{
    console.log(`listening the port ${port}`);
});