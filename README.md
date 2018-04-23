[![npm version](https://badge.fury.io/js/this-is-your-life-cli.svg)](https://badge.fury.io/js/this-is-your-life-cli)
[![Dependency Status](https://david-dm.org/mikechabot/this-is-your-life.svg)](https://david-dm.org/mikechabot/this-is-your-life)

## CLI Implementation of https://github.com/trwolfe13/this-is-your-life

### Install globally
1. `npm install -g this-is-your-life-cli`

2. Execute from CLI:
```
$ this-is-your-life-cli
{ race: { name: 'Hobgoblin', subraces: [], other: { Origin: [Object] } },
  subrace: undefined,
  class:
   { name: 'Warlock',
     ...
```

3. Execute from CLI with options (See https://github.com/trwolfe13/this-is-your-life)
```
$ this-is-your-life-cli '' '' Monk
{ race:
   { name: 'Firbolg',
     subraces: [],
     other: { 'Reason for Adventure': [Object] } },
  subrace: '',
  class:
   { name: 'Monk',
```

### Install as module

```
const generateCharacter = require('this-is-your-life-cli').default;

console.log(chalk.blue('Generating Random Character'))
console.log(generateCharacter())

console.log(chalk.blue('Generating Monk Class Character'))
console.log(generateCharacter(null, null, 'Monk'))
```
