/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const arr = Array(n).fill().map(_ => []);
    const indegree = Array(n).fill(0);
    const res = Array(n).fill().map(_ => new Set());
    for (let [f, t] of edges) {
        arr[f].push(t);
        indegree[t]++;
    }
    const list = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) list.push(i);
    }
    while (list.length) {
        let curr = list.shift();
        for (let child of arr[curr]) {
            indegree[child]--;
            if (indegree[child] === 0) list.push(child);
            res[child].add(curr);
            for (let parent of res[curr]) {
                res[child].add(parent);
            }
        }
    }
    return res.map(set => [...set].sort((a, b) => a - b));
};