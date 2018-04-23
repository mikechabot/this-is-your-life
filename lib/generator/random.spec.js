'use strict';

var random = require('./random');

describe('random', function () {
    describe('numberBetween', function () {
        it('should always be between min and max', function () {
            for (var x = 0; x < 100; x++) {
                var res = random.numberBetween(1, 10);
                expect(res).toBeLessThan(11);
                expect(res).toBeGreaterThan(0);
            }
        });
        it('is inclusive', function () {
            expect(random.numberBetween(1, 1)).toBe(1);
        });
    });
    describe('element', function () {
        it('should pick an element of the array', function () {
            var input = ['test'];
            for (var x = 0; x < 100; x++) {
                expect(random.element(input)).toBe(input[0]);
            }
        });
    });
    describe('dice', function () {
        it('should roll the right number of times', function () {
            expect(random.dice('10d1')).toBe(10);
        });
    });
    describe('percent', function () {
        it('should always be between 1 and 100', function () {
            for (var x = 0; x < 10000; x++) {
                var res = random.percent();
                expect(res).toBeLessThan(101);
                expect(res).toBeGreaterThan(0);
            }
        });
    });
});