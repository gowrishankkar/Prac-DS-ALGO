/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //binary search
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=~~((left+right)/2);
        if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]) return mid;
        nums[mid] < nums[mid+1] ? left=mid+1 : right=mid-1;
    }
    return left;
};
