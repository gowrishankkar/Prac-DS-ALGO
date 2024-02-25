/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     if (preorder.length == 0 || inorder.length == 0) {
                return null;
            }
            var root = new TreeNode(preorder[0]);
            var indexinorder = inorder.indexOf(preorder[0]);
            root.left = buildTree(preorder.slice(1, indexinorder + 1), inorder.slice(0, indexinorder));
            root.right = buildTree(preorder.slice(indexinorder + 1, inorder.length), inorder.slice(indexinorder + 1, inorder.length));
            return root;
    
};