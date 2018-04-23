'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generator = require('./generator/');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateCharacter(race, subrace, klass, background, alignment, age) {
  return (0, _generator2.default)({
    race: race, subrace: subrace, class: klass, background: background, alignment: alignment, age: age
  });
}

exports.default = generateCharacter;