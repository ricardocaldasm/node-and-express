import { createReadStream } from "fs";

const stream = createReadStream("./big-text.txt", { highWaterMark: 90000 });

// default 64kb
// // last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./big-text.txt", { highWaterMark: 90000 });
// const stream = createReadStream("./big-text.txt", { encoding: "utf-8" });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
