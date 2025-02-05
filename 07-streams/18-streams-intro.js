// 4 types of streams: writeable, readable, duplex, transform

import { createReadStream, writeFileSync } from "fs";
for (let i = 0; i < 100000; i++) {
  writeFileSync("./big-text.txt", `Hello World!${i}\n`, { flag: "a" });
}