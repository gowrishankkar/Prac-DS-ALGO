/**
 * @param {number[]} nums
 * @return {number}
 */
let subsetXORSum = nums => nums.reduce((xors, num) => [...xors, ...xors.map((xor) => xor ^ num)], [0]).reduce((sum, xor) => sum + xor, 0)