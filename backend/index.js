const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./user");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send("hello world!");
});

app.get('/api/users', (req, res) => {
  res.send(User);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if(email !== "soniaakter0915@gmail.com"){
    return res.status(401).json({ message: "Invalid credentials" });
  }else if(password !== "1234"){
    return res.status(401).json({ message: "Invalid credentials" });
  }else {
    res.status(200).json({ message: "Login sucessfull"})
  }
  res.status(200).json({ message: "Login attempt received", email, password });

});

// This is the correct way to start the server
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
