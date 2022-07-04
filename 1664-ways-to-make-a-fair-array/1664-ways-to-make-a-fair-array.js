/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    let prevEven = 0;
        let prevOdd = 0;
        let nextEven = 0;
        let nextOdd = 0;

        for (let index = 0; index < nums.length; index++) {
            if (index % 2 === 0) {
                nextEven += nums[index];
            } else {
                nextOdd += nums[index];
            }
        }


        let indexToRemove = 0;

        for (let index = 0; index < nums.length; index++) {
            if (index % 2 === 0) {
                nextEven -= nums[index];
            } else {
                nextOdd -= nums[index];
            }

            if (prevEven + nextOdd === prevOdd + nextEven) {
                indexToRemove++;
            }

            if (index % 2 === 0) {
                prevEven += nums[index];
            } else {
                prevOdd += nums[index];
            }
        }

        return indexToRemove;
};