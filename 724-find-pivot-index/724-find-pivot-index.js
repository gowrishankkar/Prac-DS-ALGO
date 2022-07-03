/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let arr = nums;
        let prefixSumArr = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            prefixSumArr[i] = prefixSumArr[i - 1] + arr[i]
        }
        for (let i = 0; i < arr.length; i++) {
            let sumLeft = 0
            if (i != 0) {
                sumLeft = prefixSumArr[i - 1]
            }
            let sumRight = prefixSumArr[arr.length - 1] - prefixSumArr[i]
            if (sumRight == sumLeft) {
                return i

            }
        }
        return -1
};