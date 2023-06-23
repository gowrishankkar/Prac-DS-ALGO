/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
//     let mutPrefix = [nums[0]]
//     for(let i = 1; i < nums.length; i++){
//         mutPrefix[i] = mutPrefix[i - 1] * nums[i]
//     }
    
//     console.log('mutPrefix', mutPrefix)
//     let result = [];
//     for(let i = 0; i < nums.length; i++){
        
//         let t = mutPrefix[mutPrefix.length - 1] / (nums[i] || 1)
//         result.push(t)
//     }

//     return result
    
    const result = Array.from({ length: nums.length }).fill(1);
    let currProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = result[i] * currProduct;
        currProduct *= nums[i];
    }

    currProduct = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * currProduct;
        currProduct *= nums[i];
    }

    return result;
}; 

