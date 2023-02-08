/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let A = nums
       let result = []
        A.sort((a, b) => a - b)
        let subset = [];
        const dfs = (index) => {
            result.push(subset.slice());

            for (let i = index; i < A.length; i++) {
                subset.push(A[i]);
                dfs(i + 1);
                subset.pop()
            }

        }
        dfs(0);
        return result
};