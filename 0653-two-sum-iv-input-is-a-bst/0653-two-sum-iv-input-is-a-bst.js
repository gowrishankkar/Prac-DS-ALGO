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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const neededValues = new Set();
    let hasSum = false;

    function dfs(node) {
        if (!node) return;
        if (neededValues.has(node.val)) {
            hasSum = true;
        } else {
                neededValues.add(k - node.val)
                dfs(node.left)
                dfs(node.right)
        }
    }

    dfs(root)
    return hasSum;
};