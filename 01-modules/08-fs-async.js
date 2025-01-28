import { readFile, writeFile } from "fs";

console.log("Start.");

readFile("./01-modules/08.01-text-file-1.txt", "utf8", (err, result) => {
  // callback function - error and result
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./01-modules/08.02-text-file-2.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./01-modules/08.03-result-async.txt", `Here is the result: ${first} ${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("Done with this task.");
    });
  });
});
console.log("Starting the next one.");
