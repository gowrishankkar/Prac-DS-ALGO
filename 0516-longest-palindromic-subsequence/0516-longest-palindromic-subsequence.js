/**
 * @param {string} s
 * @return {number}
 */

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