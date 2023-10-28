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
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = []
   
    let res = {val : 0}
   dfs(root, '', res)
    function dfs(node, currSum , res){
        if(!node) return '';
        if(!node.left && !node.right) { 
            let num =`${currSum}${node.val}` 
            res.val = res.val +  Number(num)
                                       sum.push(Number(num) )
                                      }
        dfs(node.left, `${currSum}${node.val}` , res)
        dfs(node.right,  `${currSum}${node.val}` , res)
        
    }
    console.log('sum', sum , res)
    return res.val;
};