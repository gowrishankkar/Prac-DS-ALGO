/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     if (x <= 1) {
//         return x;
//     }

//     if (x <= 3) {
//         return 1;
//     }

//     let min = 2;
//     let max = Math.floor(x / 2);

//     if (min === max) {
//         return min;
//     }

//     let currentValue = min + Math.round((max - min) / 2);

//     while (currentValue * currentValue !== x && max - min !== 1) {
//         if (currentValue * currentValue > x) {
//             max = currentValue;
//             currentValue = min + Math.round((max - min) / 2);
//             continue;
//         }

//         if (currentValue * currentValue < x) {
//             min = currentValue;
//             currentValue = min + Math.round((max - min) / 2);
//             continue;
//         }
//     }

//     if (currentValue * currentValue > x) {
//         return min;
//     }

//     return currentValue;
// };



var mySqrt = function(x) {
    if(x < 2) return x;
    let l = 0, r = x;
    let res = 0;
    while(l <= r){
        let mid = l + Math.floor((r - l) / 2);
        let power = mid * mid;
        if(power < x) {
            l = mid + 1;
            res = mid;
        }
        else if(power > x) {
            r = mid - 1
            
        }
        else if(power == x) return mid;
    }
    return res;
 
};

// const mySqrt = (t) => {
//     if(t < 2) return t;
//     let s = 0, e = t;
//     let ans = -1;
//     while(s <= e) {
//         const m = Math.floor((s+e) / 2);
//         if(m * m === t) {
//             return m;
//         } else if(m * m > t) {
//             e = m - 1;
//         } else {
//             s = m + 1;
//             ans = m;
//         }
//     }

//     return ans;
// };