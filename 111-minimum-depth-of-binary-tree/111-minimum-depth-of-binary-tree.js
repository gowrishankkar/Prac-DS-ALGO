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
var minDepth = function(root) {
   if (!root) return 0;
   var min = 999999999;
   search(root, 1);

   function search(root, level) {
     if (root) {
       if (!root.left && !root.right) {
         if (min > level) min = level;
       }
       search(root.left, level + 1);
       search(root.right, level + 1);
     }
   }

   return min;
 };