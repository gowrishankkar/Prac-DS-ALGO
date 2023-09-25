/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
// var maximumRemovals = function(s, p, removable) {
//     let res = 0, l = 0, r = removable.length - 1;
//     while(l <= r){
//         let mid = l + Math.floor((r - l) / 2);
//         if(isSubseq(s, p, removable.slice(0, mid + 1))){
//             l = mid + 1;
//             res = Math.max(res, mid + 1);
//         }
//         else r = mid - 1
//     }
//     console.log('res', res)
//     return res;
// };

// var isSubseq = (str, p, arr) =>{
//     let i = 0, j = 0;
//     while( i < str.length && j < arr.length){
//         if(arr.includes(i) || str[i] != arr[j]) {
//             i++;
//             continue;
//         }
//         i++;
//         j++;
//     }
//     console.log('arr', arr, j === arr.length, j, i)
//      // return true
//     return j == arr.length;
// }



var maximumRemovals = function(s, p, removable) {
    function isSubsequence(x){
        let i = 0;
        let j = 0;

        while (i < x.length) {
            if (x[i] === p[j]){
                j++;
                if (j === p.length) return true;
            }
            i++;
        }
        return false;
    }

    let res = null;
    s = Array.from(s);
    let i = 0;
    let j = removable.length - 1;
    
    while (i <= j) {
        const mid = Math.floor((i + j)/2);
        const temp = new Set(removable.slice(0, mid + 1));
        let x = s.map((val, index) => temp.has(index) ? null: val);
        
        if (isSubsequence(x)) {
            res = mid;
            if (i === j) break;
            i = mid + 1;
        } else j = mid - 1;
    }

    return res !== null ? res + 1 : 0;
};