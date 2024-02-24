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
    let node = root;
    if (node === null) {
        return true;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }

    return isBalanced(node.left) && isBalanced(node.right);
}

function getHeight(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}