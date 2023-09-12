/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var findKthPositive = function(arr, k) {
//     let l = 0, h = arr.length - 1;
//     while(l <= h){
//         let mid = l + Math.floor((h - l)/2);
//         let missing = arr[mid] - (mid + 1);
//         if(missing < k){ l = mid + 1;}
//         else h = mid - 1;
//     }
//     return k + h + 1;
// };

var findKthPositive = function(arr, k) {
    if (!arr || arr.length < 1) {
        return k;
    }

    let l = 0, r = arr.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l)/2);
        const target = mid + 1;
        if (arr[mid] - target >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l + k;
};