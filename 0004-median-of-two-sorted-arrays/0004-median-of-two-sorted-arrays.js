/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArr = [];
    mergedArr=[...nums1, ...nums2];
    mergedArr = mergedArr.sort((a,b)=>a-b);
    let median=Math.floor(mergedArr.length/2);
    if(mergedArr.length%2==0){
        
        return (mergedArr[median] + mergedArr[median-1])/2;
        
    }
    else{
        return mergedArr[median];
    }
    
};