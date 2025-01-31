// npm - global command, comes with nome
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// npm install -d - Just used for the developer - like nodemon

// package.json - manifest file (store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

import _ from "lodash";

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// usage of npm start - configure package.json "scripts": {"start": "node 10-npm-general.js"}
// usage of npm run dev - CUSTOM SCRIPT: "dev": "nodemon 10-npm-general.js" -

// npm uninstall lodash
