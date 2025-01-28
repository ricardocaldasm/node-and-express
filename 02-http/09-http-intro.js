import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage.");
    return; // It works only after using return,
    // otherwise node will throw an error on any navigation after the first one
    // (only works fine at the first page request you do)
  }
  if (req.url === "/about") {
    res.end("Here is our short history.");
    return;
  }
  res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for.</p><a href="/">Back home</a>.`);
  return;
});

server.listen(3000, () => {
  console.log("Listening to port 3000.");
});
