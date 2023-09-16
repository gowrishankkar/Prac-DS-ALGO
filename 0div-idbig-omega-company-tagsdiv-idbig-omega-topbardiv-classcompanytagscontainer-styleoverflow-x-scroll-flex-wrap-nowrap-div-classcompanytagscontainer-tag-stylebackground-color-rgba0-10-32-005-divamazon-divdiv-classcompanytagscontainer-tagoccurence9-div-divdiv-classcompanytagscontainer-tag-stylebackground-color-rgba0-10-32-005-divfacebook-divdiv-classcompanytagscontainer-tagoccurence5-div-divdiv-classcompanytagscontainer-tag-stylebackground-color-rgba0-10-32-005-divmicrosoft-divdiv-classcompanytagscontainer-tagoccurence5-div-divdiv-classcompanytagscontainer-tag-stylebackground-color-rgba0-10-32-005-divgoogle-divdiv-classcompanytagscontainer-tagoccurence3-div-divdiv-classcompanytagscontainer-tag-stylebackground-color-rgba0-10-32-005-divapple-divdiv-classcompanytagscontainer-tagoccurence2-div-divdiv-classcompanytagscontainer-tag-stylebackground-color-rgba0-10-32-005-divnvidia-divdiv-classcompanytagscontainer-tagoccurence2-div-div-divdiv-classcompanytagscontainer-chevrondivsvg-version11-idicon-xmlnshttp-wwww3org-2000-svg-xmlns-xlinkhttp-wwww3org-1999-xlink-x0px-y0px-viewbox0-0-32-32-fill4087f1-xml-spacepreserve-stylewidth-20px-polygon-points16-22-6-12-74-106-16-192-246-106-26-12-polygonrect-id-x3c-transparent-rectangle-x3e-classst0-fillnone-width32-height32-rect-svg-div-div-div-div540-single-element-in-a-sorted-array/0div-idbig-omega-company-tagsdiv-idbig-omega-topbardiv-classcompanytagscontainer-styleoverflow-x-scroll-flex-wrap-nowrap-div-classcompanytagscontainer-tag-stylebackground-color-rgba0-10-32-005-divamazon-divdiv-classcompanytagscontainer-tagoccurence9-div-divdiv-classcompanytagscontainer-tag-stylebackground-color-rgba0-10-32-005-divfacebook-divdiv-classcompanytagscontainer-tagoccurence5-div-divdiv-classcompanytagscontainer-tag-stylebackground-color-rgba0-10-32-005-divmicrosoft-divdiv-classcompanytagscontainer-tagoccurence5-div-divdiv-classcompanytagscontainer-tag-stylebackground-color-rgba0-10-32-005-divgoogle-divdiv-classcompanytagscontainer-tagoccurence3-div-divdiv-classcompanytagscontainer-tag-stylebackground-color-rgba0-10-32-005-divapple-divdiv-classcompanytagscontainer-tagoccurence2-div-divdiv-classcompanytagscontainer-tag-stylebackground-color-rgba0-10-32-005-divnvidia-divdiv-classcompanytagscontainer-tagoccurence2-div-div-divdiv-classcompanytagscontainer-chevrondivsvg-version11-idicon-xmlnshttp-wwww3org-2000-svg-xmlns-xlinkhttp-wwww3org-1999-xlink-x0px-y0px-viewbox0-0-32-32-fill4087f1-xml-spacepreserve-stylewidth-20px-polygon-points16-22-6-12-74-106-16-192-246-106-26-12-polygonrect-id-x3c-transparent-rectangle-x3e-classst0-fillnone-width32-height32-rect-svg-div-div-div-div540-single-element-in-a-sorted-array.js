/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r){
        let mid = l + Math.floor((r - l)/2);
        console.log('mid', mid, nums[mid] , nums[mid +1 ])
        if(nums[mid] != nums[mid-1 ] && nums[mid] != nums[mid + 1]) return nums[mid]
        if(((mid % 2 == 1) && nums[mid] == nums[mid + 1]) || (mid % 2 == 0) && nums[mid] == nums[mid - 1]) {
            r = mid - 1;
        }
        else {
               
            l = mid + 1;
           
        }
    }
    return -1;
};