'use strict';

var Class = require('./class');
var Item = require('../item/item');

var alignments = require('../../../data/alignments.json');

var random = require('../common/random');

function randomAlignment() {
    var r = random.dice('3d6');
    var a = alignments.LG;
    switch (true) {
        case r < 4:
            a = random.bool() ? alignments.CE : alignments.CN;break;
        case r < 6:
            a = alignments.LE;break;
        case r < 9:
            a = alignments.NE;break;
        case r < 13:
            a = alignments.TN;break;
        case r < 16:
            a = alignments.NG;break;
        case r < 18:
            a = random.bool() ? alignments.LG : alignments.LN;break;
        case r < 19:
            a = random.bool() ? alignments.CG : alignments.CN;break;
    }
    return a.abbreviation;
}

function byAbbreviation(abbreviation) {
    return alignments[abbreviation];
}

module.exports = {
    all: function all() {
        var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

        return Object.keys(alignments).map(function (k) {
            return alignments[k];
        });
    },
    random: randomAlignment,
    byAbbreviation: byAbbreviation
};