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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let res= [];
    const dfs = (node, res, path) =>{
        if(!node) return '';
        let newPath = !path ? `${node.val}` : `${path}->${node.val}`;
        if(!node.left && !node.right) res.push(newPath);
        
        dfs(node.left , res, newPath);
        dfs(node.right , res, newPath)
        
    }
    dfs(root, res, ``);
    return res;
};