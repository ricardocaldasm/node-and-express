import { readFile, writeFile } from "fs";
import util from "util";

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         console.log("Error");
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  //every time an async function -> try catch method
  try {
    const first = await readFilePromise("./15.01-first.txt", "utf-8");
    const second = await readFilePromise("./15.02-second.txt", "utf-8");
    await writeFilePromise("./15.03-result.txt", `This is the result: ${first} ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./15.01-first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
