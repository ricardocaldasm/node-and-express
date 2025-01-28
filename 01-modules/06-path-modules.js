import path from "path"; // can't use __dirname on ES modules.
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// const __dirname = import.meta.dirname; - NEW WAY
// const __filename = import.meta.filename; - NEW WAY

console.log(path.sep);

const filePath = path.join("./folder", "./subfolder", "./test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "./folder", "./subfolder", "./test.txt");
console.log(absolute);
