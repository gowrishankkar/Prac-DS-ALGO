/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    nums1.sort()
    nums2.sort()
  const numCounts = {};
  for (const num of nums1) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }
    
  const intersection = [];
  for (const num of nums2) {
    if (numCounts[num] && numCounts[num] > 0) {
      intersection.push(num);
      numCounts[num]--;
    }
  }
    return intersection;
}