import http from "http"; // built-in
import { readFileSync } from "fs";

// get all files
const homePage = readFileSync("./23-01-index.html");
const homeStyles = readFileSync("./23-02-styles.css");
const homeLogic = readFileSync("./23-03-browser-app.js");
const homeImage = readFileSync("./23-04-logo.svg");

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
  } else if (url === "/23-02-styles.css") {
    // STYLES
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
    return;
  } else if (url === "/23-03-browser-app.js") {
    // LOGIC
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
    return;
  } else if (url === "/23-04-logo.svg") {
    // IMAGE
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
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
