/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var numSubseq = function(nums, target) {
//     // let dp = new Array(nums.length +1).fill(Array(target+1).fill(0));
//     // for(let i = 0; i<nums.length +1; i++){
//     //     for(let j = 0; j<target +1; j++){
//     //         if(i===0) dp[i][j] = 0;
//     //         if(j===0) dp[i][j] = 1;
//     //     }
//     // }
//      var dp = new Array(nums.length +1);
//     for (let i = 0; i< nums.length +1; i++)
//       dp[i] = new Array(target + 1);
    
//     dp[0][0] = 1;
//     for (let i = 1; i <= target; i++)
//         dp[0][i] = 0;
   
//     for(let i = 1; i<nums.length +1; i++){
//         for(let j = 1; j<target +1; j++){
            
//             if(nums[i-1] <=j){
//                 dp[i][j] = dp[i-1][j - nums[i-1]] + dp[i-1][j]
//             }else{
//                 dp[i][j] =dp[i-1][j] 
//             }
           
//         }
//     }
//      console.log('dp', dp)
//     return dp[nums.length][target]
        
// };


const MOD = 1000000007;

var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const pow = new Array(len).fill(1);
    for(let i = 1; i < len; i++) {
        pow[i] = (pow[i - 1] * 2) % MOD;
    }
    let l = 0, r = len - 1, ans = 0;
    while(l <= r) {
        if(nums[l] + nums[r] > target) {
            r--; continue;
        } else {
            ans = (ans + pow[r - l]) % MOD;
            l++;
        }
    }
    return ans % MOD;
};