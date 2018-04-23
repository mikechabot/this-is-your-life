'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function LifeCLI(configArguments) {
    try {
        var character = (0, _index2.default)(configArguments[0], configArguments[1], configArguments[2], configArguments[3], configArguments[4]);
        console.log(character);
    } catch (error) {
        console.error(error);
    }
};