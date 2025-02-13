import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("./25-01-public")); //used to read the static files (css, js, png) with html

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/25-01-public/25-01-index.html");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

console.log(__dirname);
