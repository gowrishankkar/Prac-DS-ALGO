/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(arr) {
    let dp = [];
    let sum = 0;
    dp[0] = true;
    arr.forEach(a => {
        sum +=a;
        for(let i = sum; i>=a ;i--){
            if(dp[i - a]) {
                dp[i] = true;
            }
        }
    });
    
    for(let i = Math.floor(sum / 2); i>=0; i--) {
        if(dp[i]) return sum - i - i;
    }
    return sum;
};