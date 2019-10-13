"use strict";

const chalk = require("chalk");

module.exports = goodbye;

function goodbye(name) {
  console.log(`Goodbye ${chalk.yellow(name)}!`);
}
