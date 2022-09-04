/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
//     let maxAvg = Number.NEGATIVE_INFINITY;
//     for(let i = 0; i <= nums.length - k; i++){
//         let currentSum = 0;
//         for (let j = i, ind = 0; ind < k;  j++, ind++){
            
//             // console.log(i, j)
//             currentSum += nums[j]
//         }
//         maxAvg = Math.max(maxAvg , currentSum/k)
//         // console.log('currentSum', currentSum)
//     }
//     // console.log('maxAvg', maxAvg)
//     return maxAvg;
    
    
    let max = -Infinity;
    let cur = 0;
    
    for(let i=0; i<k; i++) {
        cur += nums[i];
    }
    max = cur;
    for(let i=k; i<nums.length; i++) {
        cur -= nums[i-k];
        cur += nums[i];
        max = Math.max(max, cur);
    }
    return max/k;
};