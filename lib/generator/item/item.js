'use strict';

var Class = require('../character/class');
var random = require('../common/random');
var Trinkets = require('../../../data/trinkets.json');

module.exports = {
    trinket: function trinket() {
        return random.element(Trinkets);
    }
};