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

var bstToGst = function(root) {
    const gt = (root) => {
        if (root.right)
            gt(root.right)
        this.s += root.val
        root.val = this.s 
        if (root.left)
            gt(root.left) 
    }     

    this.s = 0
    gt(root)
    return root
};