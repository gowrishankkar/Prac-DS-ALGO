/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindromeSubseq = function(s) {
    
//     return test(s, s.split("").reverse().join(""))
    
//     function test (text1, text2) {
//         if (text1 == "" || text2 == "")
//             return 0;
//         // The first row and the first col is an empty string (base case).
//         // dp[row][col] represents the length of the longest possible subsequence
//         // using substrings text1.substring(0,row) and text2.substring(0,col).
//         let dp = new Array(text2.length + 1).fill(0).map(() => new Array(text1.length + 1));
//         for (let row = 0; row < dp.length; row++) {
//             for (let col = 0; col < dp[0].length; col++) {
//                 if (row == 0 || col == 0) {
//                     dp[row][col] = 0; // can't have a common subsequence with ""
//                 } else if (text1[col - 1] === text2[row - 1]) {
//                     dp[row][col] = dp[row - 1][col - 1] + 1;
//                 } else {
//                     dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
//                 }
//             }
//         }
//         return dp[text2.length][text1.length];
//     }
// };


// var longestPalindromeSubseq = function(s) {
//     const n = s.length;
//     const dp = Array.from({length: n}, () => new Array(n).fill(0));
//     for (let subLen = 1; subLen <= n; subLen++) {
//         for (let left = 0; left <= n - subLen; left++) {
//             const right = left + subLen - 1;
//             if (subLen == 1) dp[left][right] = 1;
//             else {
//                 if (s[left] == s[right]) dp[left][right] = dp[left + 1][right - 1] + 2;
//                 else dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]);
//             }
//         }
//     }
//     return dp[0][n - 1];
// };

var longestPalindromeSubseq = function(s) {
    const dp = Array(s.length).fill(1);

    for (let i = s.length - 2; i >= 0; --i) {
        let count = 0;

        for (let j = i + 1; j < s.length; ++j) {
            const temp = dp[j];

            if (s[i] === s[j]) {
                dp[j] = count + 2;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }

            count = temp;
        }
    }

    return dp.at(-1);
};