/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     let n = s.length;
//     let m = p.length;
    
//     let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));
    
//     function isAllStars(S1, i) {
//         for (let j = 0; j <= i; j++) {
//             if (S1[j] !== '*') {
//                 return false;
//             }
//         }
//         return true;
//     }

//     function get(s, p, i, j, dp){
//         if (i < 0 && j < 0) {
//             return true;
//         }
//         if (i < 0 && j >= 0) {
//             return false;
//         }
//         if(j < 0 && i >= 0){
//             return isAllStars(s, i)
//         }
//         if (dp[i][j] !== -1) {
//             return dp[i][j];
//         }
        
//         if(s[i] === p[j] || p[i] === '?'){
//             return dp[i][j] = get(s, p, i - 1, j - 1, dp);
//         } else {
//             if(p[i] === '*'){
//                  return dp[i][j] = get(s, p, i - 1, j, dp) || get(s, p, i, j - 1, dp);
//             } else {
//                 return false;
//             }
//         }
//     }
    
//     return get(p, s, n - 1, m - 1, dp)
// };


// const dp = (s, p, si, pi, memo) => {
//     if (si > s.length) { return false; }
//     if (pi >= p.length) { return si >= s.length; }
//     if (memo[si][pi] !== undefined) { return memo[si][pi]; }
    
//     if (s[si] === p[pi] || p[pi] === '?') {
//         memo[si][pi] = dp(s, p, si + 1, pi + 1, memo);
//     } else if (p[pi] === '*') {
//         memo[si][pi] = dp(s, p, si, pi + 1, memo) || dp(s, p, si + 1, pi, memo);
//     }  else {
//         memo[si][pi] = false;
//     }
    
//     return memo[si][pi];
// }

// const isMatch = (s, p) => {
//     const memo = Array.from(Array(s.length + 1), () => Array(p.length + 1));
//     return dp(s, p, 0, 0, memo);
// };


const isMatch = (s, p) => {
    let n = s.length, m = p.length;
    let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false));
    
	dp[n][m] = true;
    
    for (let i = n; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (i < n && (s[i] === p[j] || p[j] === '?')) {
                dp[i][j] = dp[i + 1][j + 1];
            }
            else if (p[j] === '*') {
				dp[i][j] = i === n ? dp[i][j + 1] : (dp[i][j + 1] || dp[i + 1][j]);
            }
        }
    }
    
    return dp[0][0];
};