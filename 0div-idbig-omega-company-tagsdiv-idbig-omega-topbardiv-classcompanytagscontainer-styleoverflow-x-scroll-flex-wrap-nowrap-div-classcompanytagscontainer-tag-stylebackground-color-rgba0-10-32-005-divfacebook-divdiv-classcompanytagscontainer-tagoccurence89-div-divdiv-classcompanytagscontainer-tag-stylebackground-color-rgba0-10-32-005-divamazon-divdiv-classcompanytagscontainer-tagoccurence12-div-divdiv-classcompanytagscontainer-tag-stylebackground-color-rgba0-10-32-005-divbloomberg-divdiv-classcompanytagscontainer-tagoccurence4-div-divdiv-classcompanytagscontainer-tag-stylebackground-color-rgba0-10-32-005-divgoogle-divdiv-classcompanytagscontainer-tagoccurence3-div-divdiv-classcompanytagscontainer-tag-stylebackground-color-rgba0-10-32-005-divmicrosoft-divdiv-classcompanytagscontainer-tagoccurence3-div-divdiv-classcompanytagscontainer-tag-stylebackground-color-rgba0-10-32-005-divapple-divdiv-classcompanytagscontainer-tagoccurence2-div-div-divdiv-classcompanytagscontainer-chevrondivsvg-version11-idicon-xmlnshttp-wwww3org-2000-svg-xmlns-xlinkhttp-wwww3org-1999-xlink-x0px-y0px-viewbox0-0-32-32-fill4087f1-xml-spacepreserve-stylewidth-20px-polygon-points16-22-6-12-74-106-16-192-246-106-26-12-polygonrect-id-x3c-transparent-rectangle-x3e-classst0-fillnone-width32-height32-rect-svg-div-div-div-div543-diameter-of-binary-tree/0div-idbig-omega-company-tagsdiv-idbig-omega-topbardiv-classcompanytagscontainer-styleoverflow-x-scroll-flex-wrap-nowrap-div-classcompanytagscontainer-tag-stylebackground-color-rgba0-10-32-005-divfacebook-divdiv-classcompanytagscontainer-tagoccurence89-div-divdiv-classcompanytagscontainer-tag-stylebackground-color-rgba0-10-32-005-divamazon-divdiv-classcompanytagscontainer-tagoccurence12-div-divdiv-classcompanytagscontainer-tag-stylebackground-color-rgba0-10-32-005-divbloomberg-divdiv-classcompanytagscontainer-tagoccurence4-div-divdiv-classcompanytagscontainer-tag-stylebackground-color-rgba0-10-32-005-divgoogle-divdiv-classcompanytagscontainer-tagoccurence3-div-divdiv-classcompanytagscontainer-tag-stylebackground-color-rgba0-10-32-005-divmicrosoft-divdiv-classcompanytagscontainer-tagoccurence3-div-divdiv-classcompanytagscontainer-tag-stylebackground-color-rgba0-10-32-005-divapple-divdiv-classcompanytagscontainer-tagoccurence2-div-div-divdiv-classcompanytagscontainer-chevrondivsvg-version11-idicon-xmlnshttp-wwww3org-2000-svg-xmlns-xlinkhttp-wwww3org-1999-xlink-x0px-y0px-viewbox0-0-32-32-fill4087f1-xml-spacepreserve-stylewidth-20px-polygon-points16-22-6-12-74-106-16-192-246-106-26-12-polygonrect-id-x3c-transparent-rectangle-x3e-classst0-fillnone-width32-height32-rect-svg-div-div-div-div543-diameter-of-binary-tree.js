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
// var diameterOfBinaryTree = function(root, max = {data : 0}) {
//     diameterOfTree(root, max);

//     return max.data;
// };

// const diameterOfTree = (root, max) => {
//     const isBaseCase = root === null;
//     if (isBaseCase) return 0;

//     return dfs(root, max);
// }

// const dfs = (root, max) => {
//     const left = diameterOfTree(root.left, max);
//     const right = diameterOfTree(root.right, max);

//     const diameter = left + right;
//     max.data = Math.max(max.data, diameter);

//     return Math.max(left, right) +1;
// }

var diameterOfBinaryTree = function(root) {
    let max = {data : 0};
    
    var dfs = (root, max) =>{
        if(root == null) return 0;
        let left = dfs(root.left, max);
        let right = dfs(root.right, max);
        max.data = Math.max(left + right, max.data);
        return Math.max(left, right) + 1;
    }
    dfs(root, max)

    return max.data;
};