/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let resultArr = [];
    for(let i in nums){
        console.log(i)
        // resultArr[index[i]] = nums[i]
        resultArr.splice(index[i], 0,  nums[i]);
    }
    console.log('resultArr', resultArr)
    return resultArr;
};