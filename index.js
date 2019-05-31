#!/usr/bin/env node
const moduleName = process.argv.slice(2)[0];
const repl = require("repl");
if (!moduleName) console.log("Module Name not specified");
let m;
try {
  m = require(moduleName);
  console.log("Module " + moduleName + " is mounted as m");
} catch (err) {
  console.error("Fail to require module: " + moduleName);
  console.error(err);
}
repl.start("> ").context.m = m;