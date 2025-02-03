// ASYNC PATTERNS, BLOCKING CODE
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    return;
  }
  if (req.url === "/about") {
    // BLOCKING CODE !!!
    for (let i = 0; i < 300; i++) {
      for (let j = 0; j < 300; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
    return;
  }
  res.end("Error Page");
  return;
});

server.listen(3000, () => {
  console.log("Server listening to port 3000.");
});
