const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200; 

//Middle ware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const users = [];

app.post("/api/user", (req, res) => {
  const user = req.body;
  console.log(user);
  console.log(user.username);
  var username = String(user.username).toUpperCase(); 
  console.log(username);
  if (username  == 'JOHN DOE' && user.password == "password") {
    console.log('Login Successful');
    res.status(200).json({
      statuscode: 0,
      message: "Login Successful"
    });
  } else {
    console.log('Invalid username/password');
    res.status(200).json({
      statuscode: 1,
      message: "Invalid username/password"
    });
  }
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

