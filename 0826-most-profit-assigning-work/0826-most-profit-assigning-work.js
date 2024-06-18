/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const n = difficulty.length
    let jobs = [...Array(n)].map((a, i) => i).sort((i, j) => difficulty[i] - difficulty[j])
    worker.sort((a,b)=>a-b)
    let ans = 0
    let i = 0
    let max_profit_for_worker = 0
    for (let w of worker) {
        while (i < n && difficulty[jobs[i]] <= w) {
            max_profit_for_worker = Math.max(max_profit_for_worker, profit[jobs[i]])
            i++
        }
        ans += max_profit_for_worker
    }
    return ans
};