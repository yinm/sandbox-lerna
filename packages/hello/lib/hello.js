"use strict";

const chalk = require("chalk");

module.exports = hello;

function hello(name) {
  console.log(`Hello ${chalk.cyan(name)}!`);
}
