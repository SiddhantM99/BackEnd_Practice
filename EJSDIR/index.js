const express = require("express");
const app = express();
const path = require("path"); // access server from outside the directory

const port = 8080;
// Serving Static files
app.use(express.static(path.join(__dirname, "/public")));
// view = template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // access server from outside the directory joining other directory to views directory path.join()

app.get("/", (req, res) => {
    res.render("home.ejs");
});

// app.get("/random", (req, res) => {
//     res.render("rolldice.ejs");
// });

app.get("/random", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1 ; // suppose diceVal data comes from database so we can use it in rolldice.ejs
    res.render("rolldice.ejs",  {diceVal});
});

// app.get("/ig/:username", (req, res) => {
//     const Followers = ["harry", "rohit", "mohit", "sonu"];
//     let {username} = req.params;
//     res.render("instagram.ejs", {username, Followers});
// });

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
   const instaData = require("./data.json");
   const data = instaData[username];
  if(data) {
    res.render("instagram.ejs", {data});
  }
  else {
    res.render("error.ejs");
  }
    
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});