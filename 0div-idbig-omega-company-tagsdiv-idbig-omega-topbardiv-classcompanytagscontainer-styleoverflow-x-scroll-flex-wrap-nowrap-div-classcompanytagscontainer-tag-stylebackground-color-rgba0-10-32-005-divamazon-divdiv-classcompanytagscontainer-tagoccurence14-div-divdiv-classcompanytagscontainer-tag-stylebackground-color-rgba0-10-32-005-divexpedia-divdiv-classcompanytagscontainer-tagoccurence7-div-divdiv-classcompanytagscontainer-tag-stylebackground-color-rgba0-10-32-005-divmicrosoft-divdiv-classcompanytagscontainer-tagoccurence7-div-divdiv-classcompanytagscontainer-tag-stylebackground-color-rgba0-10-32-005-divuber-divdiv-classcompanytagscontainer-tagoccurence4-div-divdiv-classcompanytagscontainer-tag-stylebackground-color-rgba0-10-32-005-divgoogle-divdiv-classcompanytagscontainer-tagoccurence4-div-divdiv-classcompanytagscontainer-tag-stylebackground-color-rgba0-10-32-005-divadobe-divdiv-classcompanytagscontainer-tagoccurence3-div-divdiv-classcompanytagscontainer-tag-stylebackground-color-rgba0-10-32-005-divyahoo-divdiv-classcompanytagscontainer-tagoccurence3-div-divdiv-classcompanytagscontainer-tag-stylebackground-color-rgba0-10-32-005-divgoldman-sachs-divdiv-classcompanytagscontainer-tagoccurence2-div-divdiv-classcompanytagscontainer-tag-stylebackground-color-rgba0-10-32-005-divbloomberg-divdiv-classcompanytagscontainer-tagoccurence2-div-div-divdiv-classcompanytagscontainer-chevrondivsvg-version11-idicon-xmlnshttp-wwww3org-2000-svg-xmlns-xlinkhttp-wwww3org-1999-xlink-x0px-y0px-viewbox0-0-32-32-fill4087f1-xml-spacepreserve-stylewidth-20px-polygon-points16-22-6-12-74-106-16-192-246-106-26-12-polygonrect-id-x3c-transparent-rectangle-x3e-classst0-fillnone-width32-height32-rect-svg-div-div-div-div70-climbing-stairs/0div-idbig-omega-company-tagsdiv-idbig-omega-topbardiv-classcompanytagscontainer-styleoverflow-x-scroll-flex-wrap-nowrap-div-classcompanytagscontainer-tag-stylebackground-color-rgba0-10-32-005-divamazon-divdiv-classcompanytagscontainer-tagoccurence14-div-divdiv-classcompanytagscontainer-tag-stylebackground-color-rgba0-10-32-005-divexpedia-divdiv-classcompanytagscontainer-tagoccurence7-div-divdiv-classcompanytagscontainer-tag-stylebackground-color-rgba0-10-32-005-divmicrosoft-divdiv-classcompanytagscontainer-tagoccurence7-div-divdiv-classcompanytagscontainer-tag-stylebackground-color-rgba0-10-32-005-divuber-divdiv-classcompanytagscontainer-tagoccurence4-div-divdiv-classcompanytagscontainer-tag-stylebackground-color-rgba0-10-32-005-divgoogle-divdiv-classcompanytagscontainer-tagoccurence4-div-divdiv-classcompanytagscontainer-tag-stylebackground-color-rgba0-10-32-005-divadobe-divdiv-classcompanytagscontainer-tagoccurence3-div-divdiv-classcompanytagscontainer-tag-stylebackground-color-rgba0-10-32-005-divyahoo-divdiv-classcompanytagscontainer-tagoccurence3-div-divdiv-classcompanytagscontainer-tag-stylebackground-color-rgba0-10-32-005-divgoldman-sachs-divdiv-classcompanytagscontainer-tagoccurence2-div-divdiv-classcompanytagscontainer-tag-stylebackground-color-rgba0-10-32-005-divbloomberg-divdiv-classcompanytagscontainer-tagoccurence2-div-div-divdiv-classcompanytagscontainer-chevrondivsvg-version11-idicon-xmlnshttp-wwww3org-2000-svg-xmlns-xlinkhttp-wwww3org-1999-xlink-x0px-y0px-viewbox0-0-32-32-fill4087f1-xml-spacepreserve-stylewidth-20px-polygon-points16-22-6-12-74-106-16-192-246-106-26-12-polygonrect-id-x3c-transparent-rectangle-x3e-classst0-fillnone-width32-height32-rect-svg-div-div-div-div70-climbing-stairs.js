/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = (n, index = 0, memo = Array(n + 1).fill(0)) => {
//     const isBaseCase1 = (n < index);
//     if (isBaseCase1) return 0;

//     const isBaseCase2 = (index === n);
//     if (isBaseCase2) return 1;

//     const hasSeen = (memo[index] !== 0);
//     if (hasSeen) return memo[index];

//     const [ next, nextNext ] = [ (index + 1), (index + 2) ];
//     const left = climbStairs(n, next, memo);     /* Time O(N) | Space O(N) */
//     const right = climbStairs(n, nextNext, memo);/* Time O(N) | Space O(N) */

//     memo[index] = (left + right);                /*           | Space O(N) */
//     return memo[index];
// };

// var climbStairs = (n, index = 0) => {
//     let one = 1;
//     let two = 1;
//     for(let i = 0; i<n-1; i++){
//         let temp = one;
//         one = one + two;
//         two = temp;

//     }
//     return one
// };


// var climbStairs = function(n) {
//     let dp = new Array(n + 1).fill(0)
//     dp[n] = 1
//     dp[n-1] = 1
//     console.log(dp)
//     for(i=n-2; i>=0; i--){
//         dp[i] = dp[i+1] + dp[i+2]
//     }
//     return dp[0]
// };


var climbStairs = function(n) {
    let dp =  new Array(n + 1).fill(null);
    var test = (i) =>{
        if(i == 0) return 1;
        if( i < 0) return 0;
        if(dp[i]) return dp[i]
        return dp[i] = test(i - 1) + test(i - 2)
        
        
    }
    return test(n)
};