/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    const n = nums.length;
    let flipCount = 0;
    const flipQueue = [];
    let result = 0;

    for (let i = 0; i < n; i++) {
       
        while (flipQueue.length > 0 && i > flipQueue[0]) {
            flipQueue.shift();
        }

   
        if ((flipQueue.length % 2 === nums[i])) {
            if (i + k > n) { 
                return -1;
            }
            flipQueue.push(i + k - 1);
            flipCount++;
            result++;
        }
    }

    return result;
    
};