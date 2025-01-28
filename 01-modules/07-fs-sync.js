import { readFileSync, writeFileSync } from "fs";

console.log("start");

const first = readFileSync("./01-modules/07.01-text-file-1.txt", "utf8");
const second = readFileSync("./01-modules/07.02-text-file-2.txt", "utf8");

console.log(first, second);

writeFileSync("./01-modules/07.03-text-file-3.txt", `Here is the result for first and second: ${first}${second}`, {
  flag: "a",
});
// if I run this code again, the txt file-3 will be overwritten.
// to append the new text, i have to use { flag: "a" }.

console.log("Done with this task.");
console.log("Starting the next one.");
