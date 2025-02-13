const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./25-01-public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./25-01-public/25-01-index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
