/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(A) {
//       if (A.length == 1) return 0;
//     let lo = 0,
//       hi = A.length - 1;
//     let mid;

//     while (lo <= hi) {
//       // mid = (lo + hi) >> 1;
//         mid = lo + Math.floor(((hi - lo) / 2));
//       if (
//         mid >= 0 &&
//         A[mid] >= A[mid - 1] &&
//         mid + 1 < A.length &&
//         A[mid] >= A[mid + 1]
//       )
//         return mid;
//       else if (mid >= 0 && A[mid - 1] <= A[mid]) lo = mid + 1;
//       else hi = mid - 1;
//     }
//     if (A[A.length - 1] >= A[A.length - 2]) return A.length - 1;
//     return 0;
// };

var findPeakElement = function(nums) {
    let n = nums.length;
    let l = 0;
    let r = n - 1;
    while (l < r) {
        let m = Math.floor((l + r + 1) / 2);
        if (nums[m - 1] > nums[m]) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    return l;
    
};