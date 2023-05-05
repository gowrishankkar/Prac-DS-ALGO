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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);
    let n = root;
    while(true){
        if(n.val <= val){
            if(n.right) n = n.right;
            else {
                n.right = new TreeNode(val);
                break;
            }
        }else {
             if(n.left) n = n.left;
            else {
                n.left = new TreeNode(val);
                break;
            }
        }
    }
    return root
};