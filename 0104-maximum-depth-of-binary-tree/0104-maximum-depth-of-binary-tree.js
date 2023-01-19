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
 var maxDepth = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root);
};

const dfs = (root) => {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    const height = Math.max(left, right);

    return height + 1;
}
