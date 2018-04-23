'use strict';

var Random = require('./random');
var Sources = require('./sources');
var Backgrounds = require('../../data/backgrounds.json');

module.exports = {
    names: function names() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Sources.flatData(Backgrounds, sources).map(function (b) {
            return b.name;
        }).sort();
    },
    byName: function byName(name) {
        return [].concat.apply([], Object.keys(Backgrounds).map(function (r) {
            return Backgrounds[r];
        })).filter(function (r) {
            return r.name === name;
        })[0];
    },
    reason: function reason(background) {
        return Random.element(background.reasons);
    },
    traits: function traits(background) {
        var trait1 = Random.element(background.traits || []);
        var filteredTraits = background.traits.filter(function (i) {
            return i !== trait1;
        });
        var trait2 = Random.element(filteredTraits || []);
        var traits = [trait1, trait2];
        return traits;
    },
    ideal: function ideal(background, alignment) {
        var ideals = background.ideals.filter(function (i) {
            return i.alignments.length === 0 || i.alignments.includes(alignment.abbreviation);
        });
        return Random.element(ideals);
    },
    bond: function bond(background) {
        return Random.element(background.bonds || []);
    },
    flaw: function flaw(background) {
        return Random.element(background.flaws || []);
    },
    other: function other(background) {
        if (!background.other) return [];
        return Object.keys(background.other).map(function (o) {
            return { name: o, value: Random.element(background.other[o]) };
        });
    },
    random: function random() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Random.sourcedElement(Backgrounds, sources);
    }
};