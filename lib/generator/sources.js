'use strict';

var sources = ['EE', 'PHB', 'TOA', 'SCG', 'COS', 'XGE', 'VGM'];

function get(s) {
    if (s === 'ALL' || s.includes('ALL')) {
        return sources;
    } else {
        return s;
    }
}

function data(d, s) {
    return get(s).map(function (src) {
        return d[src];
    }).filter(function (d) {
        return d;
    });
}

function flatData(d, s) {
    return [].concat.apply([], data(d, s));
}

module.exports = {
    ALL: sources,
    get: get,
    data: data,
    flatData: flatData
};