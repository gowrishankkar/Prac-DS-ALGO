/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//      nums.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

//     let totalCost = 0;
//     let n = nums.length / 2;
//     for (let i = 0; i < n; i++) {
//         totalCost += nums[i][1] + nums[i + n][0];
//     }
//     return totalCost;
// };


// var maxSubArray = function(nums) {


//         let res = nums[0]
//         for(let  i = 0; i<nums.length; i++){
//             let currSum = 0
//             let L = Number.NEGATIVE_INFINITY
//             for(let j = i; j<nums.length; j++){
//                 currSum += nums[j]
//                 L = Math.max(L, currSum)
//             }
//              res = Math.max(L, res)
           
//         }
//     console.log('res', res)
//     return res
// };


var maxSubArray = function(nums) {


        let res = nums[0]
         let currSum = 0
        for(const num of nums){
            if(currSum < 0) currSum = 0
            currSum += num
            
            res = Math.max(currSum, res)
        }
    console.log('res', res)
    return res
};
