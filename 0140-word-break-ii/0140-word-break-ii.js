/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dfs = (k, p = '') => {
        if (k >= n)
            ans.push(p)
        let c
        for (let i=k; i<n; i++) {
            c = s.slice(k, i+1)
            if (wordset.has(c))
                dfs(i+1, p.length > 0? p+' '+c : c)
        }
    }
    let wordset = new Set(wordDict)
    let ans = []
    let n = s.length
    dfs(0)
    return ans
};