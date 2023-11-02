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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return [];
    let s = [];
    s.push(root)
    while(s.length){
        let node = s.pop();
        if(node.right) s.push(node.right);
        if(node.left) s.push(node.left);
        if(s.length) node.right = s[s.length - 1];
        node.left = null;
    }
    return root;
};