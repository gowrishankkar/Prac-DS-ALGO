/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
      this.prefixSumArr = new Array(nums.length);
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    this.prefixSumArr[i] = prefixSum;
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
     if (left < 0 || right > this.prefixSumArr.length - 1) {
    return null;
  }
  return left > 0
    ? this.prefixSumArr[right] - this.prefixSumArr[left - 1]
    : this.prefixSumArr[right];
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */