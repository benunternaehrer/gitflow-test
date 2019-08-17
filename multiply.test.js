const multiply = require('./multiply');

describe('Multiplies correctly', () => {
    it('2x2', done => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
        done();
    });
})