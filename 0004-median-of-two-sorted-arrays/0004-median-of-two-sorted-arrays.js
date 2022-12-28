/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
        nums1 = nums1.concat(nums2);
    nums1.sort((a,b) => a - b);
    console.log(nums1);
    if((nums1.length % 2) === 0) {
        const i = Math.trunc(nums1.length / 2);
        return (nums1[i-1] + nums1[i]) / 2;
    } else {
        const i = Math.trunc(nums1.length / 2);
        return nums1[i];
    }
};