/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
     // return Math.sqrt(x) << 0;
//     if (x === 0) return 0;
    
//     let left = 1, right = x, result = 0;
    
//     while (left <= right) {
//         const mid = left + Math.floor((right - left) / 2);
        
//         if (mid * mid <= x) {
//             result = mid;
//             left = mid + 1;
//         }
//         else right = mid - 1;
//     }
    
//     return result;
    
    
    
    let sqrt= 1;
    if (x===0) return 0
    
    for (let i=1;i*i<=x;i++){
        sqrt = i
    }
    return sqrt;
};