/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    function test(i, j){
        if(i == 0 && j == 0 ) return 1;
        if(i < 0 || j < 0 ) return 0;
        if(dp[i][j] !== -1) return dp[i][j]; 
        let up = test(i - 1, j, dp);
        let left  = test(i, j - 1, dp);
        return dp[i][j] = left + up;
    }
    // let dp = new Array(m).fill(null).map(()=>Array(81).fill('q'))
        let dp = new Array(m).fill(-1).map(()=>Array(n).fill(-1))
        console.log(dp)
    return test(m - 1, n - 1, dp);
    
};