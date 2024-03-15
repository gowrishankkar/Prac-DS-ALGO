/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(s1, s2) {
    let n = s1.length;
    let m = s2.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }

    for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (s1.charAt(ind1 - 1) == s2.charAt(ind2 - 1))
                dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
            else
                dp[ind1][ind2] = 0 + Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
        }
    }
    
    let len = dp[n][m];
    let i = n;
    let j = m;
    let index =  len - 1;
    // console.table(dp)
    let ans = ''
    while (i > 0 && j > 0) {
        if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
          ans += s1.charAt(i-1);
          index--;
          i--;
          j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            ans += s1.charAt(i-1);
            i--;
        } else {
            ans += s2.charAt(j-1);
            j--;
        }
     }
    
      while(i>0){
          ans += s1.charAt(i-1);
          i--;
      }
      while(j>0){
          ans += s2.charAt(j-1);
          j--;
      }
    console.log('ans', ans)
    return ans.split("").reverse().join("");;
};