const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./user")

// middleware
app.use(cors());
app.use(express.json());


// routes
app.get('/', (req, res) => {
  res.send("hello world!");
  res.end();
})

app.get('/api/users', (req, res) => {
  res.send(User);
  res.end();
})

app.listen(9000, (req, res) => {
  console.log("Server is running on port 9000");
});
