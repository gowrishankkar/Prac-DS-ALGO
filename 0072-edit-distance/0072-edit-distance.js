/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = (word1, word2, i = 0, j = 0, memo = initMemo(word1, word2)) => {
    const isBaseCase1 = ((word1.length * word2.length) === 0);
    if (isBaseCase1) return (word1.length + word2.length);

    const isBaseCase2 = (word1.length === i);
    if (isBaseCase2) return (word2.length - j);

    const isBaseCase3 = (word2.length === j);
    if (isBaseCase3) return (word1.length - i);

    const hasSeen = (memo[i][j] !== -1);
    if (hasSeen) return memo[i][j];

    return dfs(word1, word2, i, j, memo);/* Time O(N * M) | Space O((N * M) + HEIGHT) */
}

var initMemo = (word1, word2) =>  new Array(word1.length).fill()/* Time O(N) | Space O(N) */
    .map(() => new Array(word2.length).fill(-1));                   /* Time O(N) | Space O(N) */

var dfs = (word1, word2, i, j, memo) => {
    const isEqual = (word1[i] === word2[j]);
    if (isEqual) {
        memo[i][j] = minDistance(word1, word2, (i + 1), (j + 1), memo);/* Time O(N * M) | Space O(HEIGHT) */
        return memo[i][j];
    }

    const insert = minDistance(word1, word2, i, (j + 1), memo);        /* Time O(N * M) | Space O(HEIGHT) */
    const _delete = minDistance(word1, word2, (i + 1), j, memo);       /* Time O(N * M) | Space O(HEIGHT) */
    const replace = minDistance(word1, word2, (i + 1), (j + 1), memo); /* Time O(N * M) | Space O(HEIGHT) */

    memo[i][j] = (Math.min(insert, _delete, replace) + 1);             /*               | Space O(N * M) */
    return memo[i][j];
}