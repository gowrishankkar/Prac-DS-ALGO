/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(arr) {
//       let low = 0, high = arr.length - 1;
//     let ans = Infinity;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         // If left part is sorted:
//         if (arr[low] <= arr[mid]) {
//             // Keep the minimum:
//             ans = Math.min(ans, arr[low]);

//             // Eliminate left half:
//             low = mid + 1;
//         } else { // If right part is sorted:
//             // Keep the minimum:
//             ans = Math.min(ans, arr[mid]);

//             // Eliminate right half:
//             high = mid - 1;
//         }
//     }
//     return ans;
// };

var findMin = function(arr) {
    let n = arr.length; 
    let l = 0, h = arr.length - 1;
    let ans = Infinity;
    while(l <= h){
        let m= Math.floor((l + h) / 2);
        if(arr[l] <= arr[h]){
            ans = Math.min(ans, arr[l])
            break;
        }
        if(arr[l] <= arr[m]){
            ans = Math.min(ans, arr[m])
            l = m + 1;
        
        }else if(arr[m] <= arr[h]){
            ans = Math.min(ans, arr[m])
                h = m - 1
        }
    }
    
    return ans;
};