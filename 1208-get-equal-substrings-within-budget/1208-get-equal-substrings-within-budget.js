/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let max_len = 0, n = s.length
    let curr_cost = 0
    let start = 0
    for (let end = 0; end < n; end++) {
        curr_cost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end))
        if (curr_cost <= maxCost) {
            max_len = Math.max(max_len, end - start + 1)
        } else {
            curr_cost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
            start++
        }
    }
    return max_len
};