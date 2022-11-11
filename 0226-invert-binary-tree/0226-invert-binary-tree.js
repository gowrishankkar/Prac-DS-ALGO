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
 * @return {TreeNode}
 */
/**
 * https://leetcode.com/problems/invert-binary-tree/
 * TIme O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = (root) => {
//     const isBaseCase = root === null;
//     if (isBaseCase) return root;

//     return dfs(root);
// }

// const dfs = (root) => {
//     const left = invertTree(root.left);
//     const right = invertTree(root.right);

//     root.left = right;
//     root.right = left;

//     return root;
// }


var invertTree = function(root) {
    if (!root) return null;
    
    invertTree(root.left);
    invertTree(root.right);
    
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};