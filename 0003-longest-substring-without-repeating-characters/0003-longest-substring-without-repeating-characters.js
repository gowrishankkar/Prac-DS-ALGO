/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let map = {}
//     let start = 0
//     let maxLen = 0
//     let arr = s.split('')
    
//     for (i=0; i < s.length; i++) {
//         let current = map[arr[i]]
//         if (current!=null && start <= current) {
//             start = current + 1
//         } else {
//             maxLen = Math.max(maxLen, i - start + 1)
//         }
        
//         map[arr[i]] = i
//     }
    
//     return maxLen
// };

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0, sl = s.length; r < sl; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }

        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};