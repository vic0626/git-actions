const assert = require('assert');
describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.deepStrictEqual(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.deepStrictEqual(3 * 3, 9);
    });
});