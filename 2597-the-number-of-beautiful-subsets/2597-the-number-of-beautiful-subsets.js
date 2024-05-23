/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    const beauty = [[]];
    for (const el of nums) {
        beauty.push(...beauty.filter(s => !s.includes(el - k) && !s.includes(el + k)).map(s => [...s, el]));
    }
    return beauty.length - 1;
};