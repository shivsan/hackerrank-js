const {dynamicArray} = require("../../problems/dynamicArray");

test('Test 1', () => {
    const queries = [
        [1, 0, 5],
        [1, 1, 7],
        [1, 0, 3],
        [2, 1, 0],
        [2, 1, 1]];
    expect(dynamicArray(2, queries)).toBe(3);
});
