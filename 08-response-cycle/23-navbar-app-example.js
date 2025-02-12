import http from "http"; // built-in
import { readFileSync } from "fs";

// get all files
const homePage = readFileSync("./23-01-index.html");

const server = http.createServer((req, res) => {
  console.log("User hit server.");
  // console.log(req);
  // console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    // HOME PAGE
    res.writeHead(200, { "content-type": "text/html" }); // text/html are MIME types
    res.write(homePage);
    res.end(); // This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
    return;
  } else if (url === "/about") {
    // ABOUT PAGE
    res.writeHead(200, { "content-type": "text/html" }); // text/html are MIME types
    res.write("<h1>About Page</h1>");
    res.end("Hello World");
    return;
  } else {
    // 404
    res.writeHead(404, { "content-type": "text/html" }); // text/html are MIME types
    res.write("Page not found!");
    res.end();
    return;
  }
});

server.listen(3000, () => {
  console.log("Listening to port 3000.");
});
