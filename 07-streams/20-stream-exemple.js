import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./big-text.txt", "utf-8");
    // res.end(text); // content length 1.8mb, not in chunks

    const fileStream = fs.createReadStream("./big-text.txt", { encoding: "utf-8" });
    fileStream.on("open", () => {
      // The open event of the EventSource interface is fired when a connection with an event source is opened.
      fileStream.pipe(res); // pushing from the read stream into write stream - you can write data in chunk
    }); // transfer-encoding: chunked
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
