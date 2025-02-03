// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

setInterval(() => {
  console.log("Hello World");
}, 2000);
console.log("I will run first!");
// process stays alive unless
// kill process CTRL + C
// unexpected error
