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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    let result = helper(root);
    return result.isBalanced;
};

function helper(node) {
    if (!node) return {
        isBalanced: true,
        height: -1
    }

    let left = helper(node.left);
    if (!left.isBalanced) return {
        height: 0,
        isBalanced: false
    }

    let right = helper(node.right);
    if (!right.isBalanced) return {
        height: 0,
        isBalanced: false
    }

    let height = 1 + Math.max(left.height, right.height);
    let isBalanced = Math.abs(left.height - right.height) < 2;

    return {height, isBalanced};
}