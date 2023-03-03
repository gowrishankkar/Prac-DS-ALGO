/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = (arr, max = -1, ans = [ -1 ]) => {    
    arr = arr.reverse();                          /* Time O(N) */
    
    for (let i = 0; (i < (arr.length - 1)); i++) {/* Time O(N) */
        max = Math.max(max, arr[i]);
        ans[(i + 1)] = max;                           /* Space O(N) */
    }
    
    return ans.reverse();                         /* Time O(N) */
};
