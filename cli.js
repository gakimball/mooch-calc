#!/usr/bin/env node

'use strict';

const meow = require('meow');
const chalk = require('chalk');
const mooch = require('.');

const cli = meow(`
  Usage
    $ mooch <days>

  Example
    $ mooch 31
    31 days is 3.1 Mooches
`);

const days = Number(cli.input[0] || 0);
const mooches = mooch(days);
const inflect = (value, word, suffix) => value === 1 ? word : word + suffix;

console.log(`${days} ${inflect(days, 'day', 's')} is ${chalk.cyan(`${mooches} ${inflect(mooches, 'Mooch', 'es')}`)}`);
