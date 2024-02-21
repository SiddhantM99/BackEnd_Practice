const express = require('express')
const app = express()

let port = 3000
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  });
// Routing

  // app.get("/", (req, res) => {
  //   res.send('GET request to rootpage');
  // })
  // app.get("/apple", (req, res) => {
  //   res.send('GET request to apple');
  // })
  // app.get("/mango", (req, res) => {
  //   res.send('GET request to mango');
  // })

  // app.get("*", (req, res) => {
  //   res.send('Path not exist');
  // })
// Sending a reponse

//   app.use((req, res) =>{
//     console.log("request received");
//     res.send("This is normal response");
//   });

//  Path parameters

app.get("/", (req, res) => {
  res.send('Hello i am root');
})

app.get("/:username/:id/:password", (req, res) => {
  let {username, id, password} = req.params;
  res.send(`welcome to the page @${username}`);
})

// query string pending?