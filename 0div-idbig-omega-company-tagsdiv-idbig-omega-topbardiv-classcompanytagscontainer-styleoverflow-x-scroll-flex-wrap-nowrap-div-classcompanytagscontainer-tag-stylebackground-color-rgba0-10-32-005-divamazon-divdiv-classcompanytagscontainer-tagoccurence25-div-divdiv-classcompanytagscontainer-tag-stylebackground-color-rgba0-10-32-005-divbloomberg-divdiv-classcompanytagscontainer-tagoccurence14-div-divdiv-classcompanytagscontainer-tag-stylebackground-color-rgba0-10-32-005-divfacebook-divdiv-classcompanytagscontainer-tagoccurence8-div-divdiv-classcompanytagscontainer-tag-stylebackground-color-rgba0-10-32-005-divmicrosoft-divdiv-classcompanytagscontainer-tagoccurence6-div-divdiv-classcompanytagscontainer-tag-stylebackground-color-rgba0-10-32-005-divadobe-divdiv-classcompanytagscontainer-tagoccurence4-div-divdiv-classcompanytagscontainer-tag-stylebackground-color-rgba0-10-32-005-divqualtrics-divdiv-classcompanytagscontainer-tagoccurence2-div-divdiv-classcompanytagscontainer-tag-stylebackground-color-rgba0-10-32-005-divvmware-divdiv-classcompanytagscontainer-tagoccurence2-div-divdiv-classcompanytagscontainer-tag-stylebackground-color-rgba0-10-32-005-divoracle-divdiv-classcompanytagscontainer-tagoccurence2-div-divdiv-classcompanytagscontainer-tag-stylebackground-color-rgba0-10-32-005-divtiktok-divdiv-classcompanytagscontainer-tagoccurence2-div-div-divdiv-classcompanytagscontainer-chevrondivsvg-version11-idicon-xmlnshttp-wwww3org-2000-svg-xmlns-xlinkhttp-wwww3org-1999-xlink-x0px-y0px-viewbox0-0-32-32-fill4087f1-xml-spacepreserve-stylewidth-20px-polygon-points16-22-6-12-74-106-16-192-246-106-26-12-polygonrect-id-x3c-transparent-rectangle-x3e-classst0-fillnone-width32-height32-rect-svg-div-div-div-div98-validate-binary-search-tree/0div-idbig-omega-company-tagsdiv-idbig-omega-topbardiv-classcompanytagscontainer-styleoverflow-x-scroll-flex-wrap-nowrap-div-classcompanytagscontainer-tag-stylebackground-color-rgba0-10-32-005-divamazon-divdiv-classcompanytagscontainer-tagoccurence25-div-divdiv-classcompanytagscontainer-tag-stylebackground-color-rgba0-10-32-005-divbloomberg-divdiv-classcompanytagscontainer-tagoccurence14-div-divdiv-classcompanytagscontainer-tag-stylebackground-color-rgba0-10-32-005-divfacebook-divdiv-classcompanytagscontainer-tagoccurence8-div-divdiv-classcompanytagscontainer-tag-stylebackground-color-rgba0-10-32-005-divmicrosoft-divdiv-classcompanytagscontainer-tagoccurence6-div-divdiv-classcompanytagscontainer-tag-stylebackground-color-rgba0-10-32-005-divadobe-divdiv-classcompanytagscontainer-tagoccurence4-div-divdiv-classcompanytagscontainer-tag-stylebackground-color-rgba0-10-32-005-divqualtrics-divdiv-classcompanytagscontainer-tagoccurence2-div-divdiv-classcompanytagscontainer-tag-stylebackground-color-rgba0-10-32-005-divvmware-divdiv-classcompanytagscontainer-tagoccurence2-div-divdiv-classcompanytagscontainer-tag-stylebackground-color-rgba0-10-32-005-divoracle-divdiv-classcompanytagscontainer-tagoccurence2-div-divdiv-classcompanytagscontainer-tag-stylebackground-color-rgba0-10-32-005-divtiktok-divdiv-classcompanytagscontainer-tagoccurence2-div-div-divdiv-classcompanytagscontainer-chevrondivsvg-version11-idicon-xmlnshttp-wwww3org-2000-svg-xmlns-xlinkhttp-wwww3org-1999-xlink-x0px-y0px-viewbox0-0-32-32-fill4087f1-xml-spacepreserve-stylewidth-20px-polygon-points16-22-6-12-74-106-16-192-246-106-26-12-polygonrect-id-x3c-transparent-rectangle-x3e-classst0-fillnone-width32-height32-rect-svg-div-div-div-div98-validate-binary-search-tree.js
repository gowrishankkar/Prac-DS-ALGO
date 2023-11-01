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
// var isValidBST = function(root, min = -Infinity, max = Infinity) {
//     const isBaseCase = root === null;
//     if (isBaseCase) return true;

//     const isInvalid = (root.val <= min) || (max <= root.val);
//     if (isInvalid) return false;

//     return dfs(root, min, max);
// };

// const dfs = (root, min, max) => {
//     const left = isValidBST(root.left, min, root.val);
//     const right = isValidBST(root.right, root.val, max);

//     return left && right;
// }


var isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity);
};

const dfs = (root, min, max) => {
    if(root == null) return true;
    if(root.val >= max || root.val <= min) return false;
    const left = dfs(root.left, min, root.val);
    const right = dfs(root.right, root.val, max);

    return left && right;
}