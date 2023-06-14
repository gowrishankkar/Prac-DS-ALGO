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
var getMinimumDifference = function(root) {
	let prev = Infinity;
	let min = Infinity;
    console.log('prev', prev)
    function dfs(node) {
        if (node == null) {
            return;
        }
        dfs(node.left);
        min = Math.min(min, Math.abs(node.val - prev))
        prev = node.val
        dfs(node.right);
    }

    dfs(root)
    return min
};