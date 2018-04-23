#!/usr/bin/env node

const generateCharacterFromCLI = require('./lib/cli');
generateCharacterFromCLI(process.argv.slice(2));