// CommonJS, every is module (by default) - node uses CommonsJS lib
// Modules - Encapsulated Code (only share minimum)
const names = require("./02.01-names"); // always starts with ./ and does not use .js
const sayHi = require("./02.02-utils");

console.log(names);

sayHi(names.john);

const data = require("./02.03-alternative-syntax");
console.log(data);
