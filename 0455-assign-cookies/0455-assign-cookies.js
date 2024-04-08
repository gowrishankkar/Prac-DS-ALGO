/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    const n = g.length
    let i = 0
    for (c of s) {
        if (g[i] <= c) {
            i++
            if (i == n)
                return i
        }
    }
    return i
};