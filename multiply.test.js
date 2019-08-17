const multiply = require('./multiply');

describe('Multiplies correctly', () => {
    it('2x2', done => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
        done();
    });
    it('3x3', done => {
        const result = multiply(3, 3);
        expect(result).toBe(9);
        done();
    });
})