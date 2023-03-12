/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = (text1, text2, p1 = 0, p2 = 0, memo = initMemo(text1, text2)) => {
    const isBaseCase = ((p1 === text1.length) || (p2 === text2.length));
    if (isBaseCase) return 0;

    const hasSeen = (memo[p1][p2] !== null);
    if (hasSeen) return memo[p1][p2];

    return dfs(text1, text2, p1, p2, memo);/* Time O((N * M) * M)) | Space O((N * M) + HEIGHT) */
}

var initMemo = (text1, text2) => new Array((text1.length + 1)).fill()/* Time O(N) | Space O(N) */
    .map(() => new Array((text2.length + 1)).fill(null));                /* Time O(M) | Space O(M) */

var dfs = (text1, text2, p1, p2, memo) => {
    const left = longestCommonSubsequence(text1, text2, (p1 + 1), p2, memo);       /* Time O(N * M) | Space O(HEIGHT) */

    const index = text2.indexOf(text1[p1], p2);                                        /* Time O(M) */
    const isPrefix = (index !== -1);

    const right = isPrefix
        ? (longestCommonSubsequence(text1, text2, (p1 + 1), (index + 1), memo) + 1)/* Time O(N * M) | Space O(HEIGHT) */
        : 0;

    memo[p1][p2] = Math.max(left, right);                                          /*               | Space O(N * M) */
    return memo[p1][p2];
}
