/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// var findKthPositive = function(arr, k) {
//     if (!arr || arr.length < 1) {
//         return k;
//     }
        
//     let l = 0, h = arr.length - 1;
//     while(l <= h){
//         let mid = l + Math.floor((h - l)/2);
//         let missing = arr[mid] - (mid + 1);
//         if(missing < k) l = mid + 1;
//         else h = mid - 1;
//     }
//     return l + k;
// };

var findKthPositive = function(arr, k) {
     let count = 0;
  for (item of arr) {
    if (item <= k + count) {
      count++;
    }
  }

  return k + count;
};