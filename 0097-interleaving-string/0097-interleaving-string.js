/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = (s1, s2, s3, i = 0, j = 0, k = 0, memo = initMemo(s1, s2)) => {
    const isBaseCase1 = (s3.length !== (s1.length + s2.length));
    if (isBaseCase1) return false;

    const isBaseCase2 = (i === s1.length);
    if (isBaseCase2) return (s2.slice(j) === s3.slice(k));/* Time O(M + K) | Space O(M + K) */

    const isBaseCase3 = (j === s2.length);
    if (isBaseCase3) return (s1.slice(i) === s3.slice(k));/* Time O(N + K) | Space O(N + K) */

    const hasSeen = (memo[i][j] !== null);
    if (hasSeen) return memo[i][j];

    return dfs(s1, s2, s3, i, j, k, memo);/* Time O(N * M) | Space O((N * M) + HEIGHT) */
}

var initMemo = (s1, s2) => new Array(s1.length).fill()/* Time O(N) | Space O(N) */
    .map(() => new Array(s2.length).fill(null));          /* Time O(M) | Space O(M) */

var dfs = (s1, s2, s3, i, j, k, memo) => {
    const left = ((s3[k] === s1[i]) && isInterleave(s1, s2, s3, (i + 1), j, (k + 1), memo)); /* Time O(N) | Space O(HEIGHT) */
    const right = ((s3[k] === s2[j]) && isInterleave(s1, s2, s3, i, (j + 1), (k + 1), memo));/* Time O(M) | Space O(HEIGHT) */

    memo[i][j] = left || right;                                                              /*           | Space O(N * M) */
    return memo[i][j];
}