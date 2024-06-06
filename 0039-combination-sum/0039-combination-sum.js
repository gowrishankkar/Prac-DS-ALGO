/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    let temp = []
    findCombinations(0, candidates, target, ans, temp)
    return ans;
};

function findCombinations(index, arr, target, ans, temp){
    if(index == arr.length){
       
        if(target == 0){
             console.log('temp', temp, target)
            return ans.push([...temp]);
        }
        return;
    }
    if(arr[index] <= target){
        temp.push(arr[index]);
         findCombinations(index, arr, target - arr[index], ans, temp);
        temp.pop();
    }
    findCombinations(index + 1, arr, target, ans, temp);
}


// var combinationSum = function (candidates, target){
//     function dfs(candidate, target, idx, combination, result){
//         if(target < 0) return result;
//         if(target === 0){
//            return result.push(combination.slice());
//             }
//         for (let i = idx; i < candidate.length; i++) {
//             combination.push(candidate[i])
            
//              dfs(candidate, (target - candidate[i]) , idx, combination, result);
//             combination.pop();
//         }
//         return result;
//     }
    
//     let idx = 0;
//     let result = [];
//     let combination = [];
 
//     return dfs(candidates, target, idx, combination,result)
    
// }