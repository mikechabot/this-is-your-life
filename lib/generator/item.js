'use strict';

var Class = require('./class');
var random = require('./random');
var Trinkets = require('../../data/trinkets.json');

module.exports = {
    trinket: function trinket() {
        return random.element(Trinkets);
    }
};