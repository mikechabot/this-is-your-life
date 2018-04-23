'use strict';

const chalk = require('chalk');
const generateCharacter = require('./lib').default;

console.log(chalk.blue('Generating Random Character'))
console.log(generateCharacter())

console.log(chalk.blue('Generating Monk Class Character'))
console.log(generateCharacter(null, null, 'Monk'))