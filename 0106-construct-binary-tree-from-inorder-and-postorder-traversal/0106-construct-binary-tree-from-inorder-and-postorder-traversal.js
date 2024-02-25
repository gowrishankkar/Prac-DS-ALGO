/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
       if (postorder.length == 0 || inorder.length == 0) {
        return null;
    }
    let n = postorder.length - 1
    var root = new TreeNode(postorder[n]);
    var indexinorder = inorder.indexOf(postorder[n]);
    root.left = buildTree(inorder.slice(0, indexinorder), postorder.slice(0, indexinorder));
    root.right = buildTree(inorder.slice(indexinorder + 1, inorder.length),postorder.slice(indexinorder, postorder.length - 1));
    return root;
    
};