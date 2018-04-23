'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Random = require('../common/random');
var Sources = require('./sources');
var Races = require('../../../data/races.json');

function byName(name) {
    return Sources.flatData(Races, 'ALL').filter(function (r) {
        return r.name === name;
    })[0];
}

module.exports = {
    names: function names() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Sources.flatData(Races, sources).map(function (r) {
            return r.name;
        }).sort();
    },
    subraceNames: function subraceNames(race) {
        var r = byName(race);
        if (!r) {
            return [];
        }
        return r.subraces.map(function (sr) {
            return sr.name;
        }).sort();
    },
    byName: byName,
    random: function random() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Random.sourcedElement(Races, sources);
    },
    randomSubrace: function randomSubrace(race) {
        return Random.element(race.subraces);
    },
    other: function other(race, subrace) {
        var r = [];
        if (race.other) {
            r.push.apply(r, _toConsumableArray(Object.keys(race.other).map(function (o) {
                return { name: o, value: Random.element(race.other[o]) };
            })));
        }
        if (subrace && subrace.other) {
            r.push.apply(r, _toConsumableArray(Object.keys(subrace.other).map(function (o) {
                return { name: o, value: Random.element(subrace.other[o]) };
            })));
        }
        return r;
    }
};