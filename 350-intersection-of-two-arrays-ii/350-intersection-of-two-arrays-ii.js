/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      let objectA = {};
        let result = [];

        for (let i = 0; i < nums1.length; i++) {
            if (objectA.hasOwnProperty(nums1[i])) objectA[nums1[i]]++;
            else objectA[nums1[i]] = 1;
        }
        for (let i = 0; i < nums2.length; i++) {
            if (objectA.hasOwnProperty(nums2[i]) && objectA[nums2[i]] > 0) {
                result.push(nums2[i])
                objectA[nums2[i]]--;
            }
        }
        // console.log("mySet", objectA, result);
        return result;
};