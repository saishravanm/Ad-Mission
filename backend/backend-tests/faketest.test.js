const { add } = require('../faketest');

describe("faketest.js test", () => {
    it("adds 1 + 3 to equal 4", () => {
        expect(add(1, 3)).toBe(4);
    });
});
