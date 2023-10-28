/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = []
   dfs(root, 0)
    function dfs(node, currSum){
        if(!node) return;
        if(!node.left && !node.right) sum.push(node.val + currSum)
        
        dfs(node.left, node.val + currSum)
        dfs(node.right, node.val +  currSum)
    }
    
    return sum.includes(targetSum)    
};


// var hasPathSum = function(root, targetSum) {
//     let sum = []
//     let max = {data : 0}
//     dfs(root, max)
//     function dfs(node, max){
//         if(!node) return;
//         let left = Math.max(0, dfs(node.left, max))
//         let right = Math.max(0, dfs(node.right, max))
//         max.data = Math.max(max.data, left + right + node.val);
//         return Math.max(left , right) + node.val
//     }
//     return max.data ;    
// };