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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const s = [];
    const dfs = (node, level) => {
        if (!node) {
            return;
        }
        if (!s[level]) {
            s[level] =[];
        }
        s[level].push(node.val);
        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }
    
    dfs(root, 0);
    for(let i=0;i<s.length;i++) {
        if (i % 2 == 1) {
            s[i].reverse();
        }
    }
    return s;
};