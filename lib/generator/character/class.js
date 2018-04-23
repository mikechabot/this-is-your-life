'use strict';

var Random = require('../common/random');
var Sources = require('./sources');
var Classes = require('../../../data/classes.json');

module.exports = {
    names: function names() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Sources.flatData(Classes, sources).map(function (c) {
            return c.name;
        }).sort();
    },
    byName: function byName(name) {
        return [].concat.apply([], Object.keys(Classes).map(function (r) {
            return Classes[r];
        })).filter(function (r) {
            return r.name === name;
        })[0];
    },
    random: function random() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Random.sourcedElement(Classes, sources);
    },
    reason: function reason(cClass) {
        return Random.element(cClass.reasons);
    },
    other: function other(cClass) {
        if (!cClass.other) return [];
        return Object.keys(cClass.other).map(function (o) {
            return { name: o, value: Random.element(cClass.other[o]) };
        });
    }
};