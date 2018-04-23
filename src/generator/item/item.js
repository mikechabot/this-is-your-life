const Class = require('../character/class');
const random = require('../common/random');
const Trinkets = require('../../../data/trinkets.json');

module.exports = {
    trinket: function () {
        return random.element(Trinkets);
    }
};
