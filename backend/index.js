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

app.get('/api/users/:id', (req, res) =>{
  res.send(User[req.params.id]);
})

// This is the correct way to start the server
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
