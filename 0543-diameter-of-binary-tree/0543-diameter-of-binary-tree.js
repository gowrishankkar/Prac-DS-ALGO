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
var diameterOfBinaryTree = function(root) {
    let map = {d : 0};
    let dfs = (root, map) =>{
        if(!root) return 0;
        let left = dfs(root.left, map);
        let right = dfs(root.right, map)
        map['d'] = Math.max(map.d, left + right);
        return 1 + Math.max(left, right)
    };
    
    dfs(root, map);
    return map.d;
};