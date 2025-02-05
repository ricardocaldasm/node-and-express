import EventEmitter from "events"; // EventEmitter is a class from the Node.js events module that allows you to handle events in an asynchronous, event-driven architecture.

const customEmitter = new EventEmitter();
// on - listen for an event
// emit - emit an event
customEmitter.on("response", (name, age) => {
  // string inside on() and emit() must be the same
  console.log(`data received. Name: ${name}. Age: ${age}. `);
});

// you can have as many modules as you want
customEmitter.on("response", () => {
  console.log(`some other logic here.`);
});

customEmitter.emit("response", "John", 34); // the order matters. first listen then emit
