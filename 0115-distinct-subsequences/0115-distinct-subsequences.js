/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let n = s.length;
    let m = t.length;
    
    let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));
    return getCount(s, t, n - 1, m - 1, dp);
};

function getCount(s, t, i, j, dp){
    if(j < 0) return 1;
    if(i < 0) return 0;
    if(dp[i][j] !== -1) return dp[i][j];
    
    if(s[i] === t[j]){
        const take = getCount(s, t, i - 1, j - 1, dp);
        const notTake = getCount(s, t, i - 1, j, dp);
        return dp[i][j] = take + notTake;
    } else {
         return dp[i][j] = getCount(s, t, i - 1, j, dp);
    }

}