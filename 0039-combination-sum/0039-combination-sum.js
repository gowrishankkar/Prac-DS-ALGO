/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target, index = 0, combination = [], combinations = []) {
    const isBaseCase = target < 0;
    if (isBaseCase) return combinations;

    const isTarget = target === 0;
    if (isTarget) return combinations.push(combination.slice());

    for (let i = index; i < candidates.length; i++) {
        backTrack(candidates, target, i, combination, combinations);
    }

    return combinations;
}

const backTrack = (candidates, target, i, combination, combinations) => {
    combination.push(candidates[i]);
        combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
    combination.pop();
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



// var combinationSum = function (candidates, target){
//     function dfs(candidates, target, index, combination, combinations){
//         const isBaseCase = target < 0;
//         if (isBaseCase) return combinations;

//         const isTarget = target === 0;
//         if (isTarget) return combinations.push(combination.slice());

//         for (let i = index; i < candidates.length; i++) {
//             backTrack(candidates, target, i, combination, combinations);
//         }

//         return combinations;
//     }
    
//     const backTrack = (candidates, target, i, combination, combinations) => {
//         combination.push(candidates[i]);
//             combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
//         combination.pop();
//     }
    
//     let idx = 0;
//     let combinations = [];
//     let combination = [];
 
//     return dfs(candidates, target, idx, combination,combinations)
    
// }