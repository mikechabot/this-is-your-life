'use strict';

var sources = require('../character/sources');

var Random = require('random-js');
var random = new Random(Random.engines.mt19937().autoSeed());

module.exports = {
    numberBetween: function numberBetween(min, max) {
        return random.integer(min, max);
    },
    element: function element(d) {
        return random.pick(d);
    },
    sourcedElement: function sourcedElement(d, s) {
        return random.pick(sources.flatData(d, s));
    },
    dice: function dice(roll) {
        var i = roll.toLowerCase().split('d').map(Number);
        return random.dice(i[1], i[0]).reduce(function (p, c) {
            return p + c;
        }, 0);
    },
    percent: function percent() {
        return random.integer(1, 100);
    },
    bool: function bool() {
        var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

        return random.bool(percent);
    },
    weightedOption: function weightedOption(options) {
        var sum = options.map(function (o) {
            return o.chance;
        }).reduce(function (p, c) {
            return p + c;
        }, 0);
        var result = random.integer(1, sum);
        var counter = 0,
            index = 0,
            option = void 0;
        while (counter < result) {
            option = options[index++];
            counter += option.chance;
        }
        return option;
    }
};