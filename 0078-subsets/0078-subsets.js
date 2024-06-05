/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = (nums) => {
    let result = []
    function dfs(i, arr = []){
        if(i === nums.length) {
            result.push(arr)
            return;
        }
        dfs(i + 1, arr)
        dfs(i + 1, [...arr, nums[i]])
    }
    dfs(0)
    return result
 }

