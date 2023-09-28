/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
// var minimizeMax = function(nums, p) {
//     nums.sort((a, b) => a - b);
//     let l = 0, r = Math.pow(10 , 9);
//     let res = Math.pow(10 , 9);
//     while( l <= r){
//         let m =  l + Math.floor((r - l)/ 2);
//         if(isValid(m, nums, p)){
//             res = m;
//             r = m - 1;
//         }else l = m + 1;
//     }
//     return res;
    
// };

// var isValid = (t, nums, p) => {
//     let i = 1, count = 0;
//     while(i < nums.length){
//         if(nums[i] - nums[i - 1] <= t){
//             count++;
//             i = i + 2;
//         } else i++;
//         // if(count == p) return true;
//     }
//     return count>=p;;
    
// }
// // function isValid(maxDiff, nums, p, ){
// //     let n = 0;
// //     for(let i=1; i<nums.length; i++){
// //         if(nums[i]- nums[i-1] <= maxDiff){
// //             n++;
// //             i++;
// //         }
// //     }
// //     return n>=p;
// // }



// ----------------------------

var minimizeMax = function(nums, p) {
    nums.sort((a,b)=>a-b);
    let l = -1, r = 1e9;
    while(l+1<r){
        let mid = Math.floor((l+r)/2);
        good(nums, p, mid) ? r = mid : l = mid;
    }
    return r;
};

let good = function(nums, p, maxDiff){
    let n = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i]- nums[i-1] <= maxDiff){
            n++;
            i++;
        }
    }
    return n>=p;
}