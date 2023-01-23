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

    const ans = [];
    function goDFS(node, curruntSum) {
        if(!node) return;
        if(!node.left && !node.right) {
            ans.push(node.val + curruntSum);
        }
        goDFS(node.left, curruntSum + node.val);
        goDFS(node.right, curruntSum + node.val);
    }
    goDFS(root, 0);
    
    return ans.includes(targetSum);
};