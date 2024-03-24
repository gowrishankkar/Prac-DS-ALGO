/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(A) {
    let n = A.length;
    let dp = new Array(n).fill(null).map(()=> new Array(2).fill(-1));
    
    function dfs(i, buy){
        if(i == n) return 0;
        if(dp[i][buy] !== -1) return dp[i][buy];
        let profit;
        
        if(buy){
            profit =  Math.max( -A[i] + dfs(i + 1, 0), dfs(i+1, 1));
        }else{
            profit =  Math.max( A[i] + dfs(i + 1, 1), dfs(i+1, 0));
        }
        return dp[i][buy] = profit;
    }
    
    return dfs(0, 1)
};