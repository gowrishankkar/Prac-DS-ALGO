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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
     let sum = 0;
        dfs(root);
        return sum;

        function dfs(root) {
            if (!root) {
                return;
            }
            if (root.val < low) {
                dfs(root.right);
            } else if (root.val > high) {
                dfs(root.left);
            } else {
                sum += root.val;
                dfs(root.left);
                dfs(root.right);
            }
        }
};