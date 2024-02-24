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
var maxPathSum = function (root) {
    let maxPathSum = root.val;
    dfs(root);
    function dfs(root) {
        if (!root) return 0;
        let leftPathSum = Math.max(0, dfs(root.left));
        let rightPathSum = Math.max(0, dfs(root.right));
        maxPathSum = Math.max(maxPathSum, leftPathSum + root.val + rightPathSum);
        return root.val + Math.max(leftPathSum, rightPathSum);
    }

    return maxPathSum;
};