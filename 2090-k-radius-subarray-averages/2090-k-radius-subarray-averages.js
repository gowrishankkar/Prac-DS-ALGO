/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const A = new Array(nums.length).fill(-1)
    let total = null
    for (let i = k; i < nums.length - k; i++){
        if (total === null){
            total = getSum()
        } else {
            total -= nums[i - k - 1]
            total += nums[i + k]
        }
        A[i] = Math.trunc(total / (2 * k + 1))
    }
    return A

    function getSum(){
        let s = 0
        for (let i = 0; i <= 2 * k; i++){
            s += nums[i]
        }
        return s
    }
};