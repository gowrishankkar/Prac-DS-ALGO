/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    nums.forEach((e) => xor ^= e);
    let setBit = xor & -xor;
    let a = 0, b = 0;
    nums.forEach((e) =>{
        if(e & setBit) a ^= e
        else b ^= e
    })
    if(a > b) return [b, a]
    return [a, b]
};