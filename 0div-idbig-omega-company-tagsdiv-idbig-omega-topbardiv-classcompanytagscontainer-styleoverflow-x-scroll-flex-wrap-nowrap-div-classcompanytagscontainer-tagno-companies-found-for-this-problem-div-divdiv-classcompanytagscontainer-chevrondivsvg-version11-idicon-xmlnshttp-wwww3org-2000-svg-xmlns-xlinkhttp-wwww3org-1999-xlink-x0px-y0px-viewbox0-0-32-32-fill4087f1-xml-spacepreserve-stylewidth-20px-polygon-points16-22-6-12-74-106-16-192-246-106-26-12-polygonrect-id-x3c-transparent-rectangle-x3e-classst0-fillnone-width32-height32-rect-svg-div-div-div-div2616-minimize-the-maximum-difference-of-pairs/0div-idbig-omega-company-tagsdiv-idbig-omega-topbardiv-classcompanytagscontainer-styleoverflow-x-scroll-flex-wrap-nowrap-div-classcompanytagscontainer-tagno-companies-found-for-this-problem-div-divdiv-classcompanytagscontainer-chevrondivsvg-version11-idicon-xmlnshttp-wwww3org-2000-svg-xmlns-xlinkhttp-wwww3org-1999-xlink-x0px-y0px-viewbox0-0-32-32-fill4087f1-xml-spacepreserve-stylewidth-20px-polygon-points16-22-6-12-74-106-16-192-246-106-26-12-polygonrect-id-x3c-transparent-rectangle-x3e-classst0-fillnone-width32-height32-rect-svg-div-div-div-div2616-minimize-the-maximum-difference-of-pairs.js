/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);
    let l = 0, r = Math.pow(10 , 9);
    let res = Math.pow(10 , 9);
    while( l <= r){
        let m =  l + Math.floor((r - l)/ 2);
        if(isValid(m, nums, p)){
            res = m;
            r = m - 1;
        }else l = m + 1;
    }
    return res;
    
};

// var isValid = (t, nums, p) => {
//     let i = 0, count = 0;
//     while(i < nums.length - 1){
//         if(Math.abs(nums[i] - nums[i + 1]) <= t){
//             count++;
//             i++;
//         } else i++;
//         if(count == p) return true;
//     }
//     return false;
    
// }
function isValid(maxDiff, nums, p, ){
    let n = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i]- nums[i-1] <= maxDiff){
            n++;
            i++;
        }
    }
    return n>=p;
}