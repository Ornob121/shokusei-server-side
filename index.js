const express = require("express");
const chefs = require("./chefs.json");
const reviews = require("./review.json");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This server is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(typeof id);
  const chef = chefs.find((chef) => chef.id === parseInt(id));
  res.send(chef);
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});
