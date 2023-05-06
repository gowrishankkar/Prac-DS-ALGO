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