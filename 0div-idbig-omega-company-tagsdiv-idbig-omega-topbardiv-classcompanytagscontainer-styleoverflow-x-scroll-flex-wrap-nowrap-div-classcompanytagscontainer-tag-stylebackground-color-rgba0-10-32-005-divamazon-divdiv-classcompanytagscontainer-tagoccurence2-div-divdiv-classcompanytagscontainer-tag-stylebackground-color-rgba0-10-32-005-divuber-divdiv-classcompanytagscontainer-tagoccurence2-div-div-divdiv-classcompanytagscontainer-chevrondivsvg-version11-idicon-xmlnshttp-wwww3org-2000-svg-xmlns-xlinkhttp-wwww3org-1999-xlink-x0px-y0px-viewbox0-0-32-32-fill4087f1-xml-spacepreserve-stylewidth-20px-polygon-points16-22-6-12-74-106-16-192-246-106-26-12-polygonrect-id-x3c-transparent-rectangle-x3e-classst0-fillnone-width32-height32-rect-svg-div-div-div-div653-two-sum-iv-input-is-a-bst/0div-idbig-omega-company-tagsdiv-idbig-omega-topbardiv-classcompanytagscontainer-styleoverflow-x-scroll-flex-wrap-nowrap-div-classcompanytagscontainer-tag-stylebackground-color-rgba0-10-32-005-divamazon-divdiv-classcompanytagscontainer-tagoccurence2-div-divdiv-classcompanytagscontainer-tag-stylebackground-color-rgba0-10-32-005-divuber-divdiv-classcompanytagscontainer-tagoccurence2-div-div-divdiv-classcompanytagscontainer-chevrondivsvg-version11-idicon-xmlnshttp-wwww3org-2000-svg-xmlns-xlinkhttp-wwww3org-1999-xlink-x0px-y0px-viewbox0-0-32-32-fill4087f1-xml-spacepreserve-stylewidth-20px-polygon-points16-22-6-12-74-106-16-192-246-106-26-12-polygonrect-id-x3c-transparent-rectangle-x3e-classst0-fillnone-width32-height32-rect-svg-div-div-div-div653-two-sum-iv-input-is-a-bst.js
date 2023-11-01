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
       if(!root) {
        return false;
    }
    const map = new Set();
    const dfs = (node) => {
        if(!node) {
            return false;
        }
        const curr = k-node.val;
        if(map.has(curr)) {
            return true;
        }
        map.add(node.val);
        return dfs(node.left) || dfs(node.right);
    };
    
    return dfs(root);
};