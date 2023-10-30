/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//      const isGreater = (p.val < root.val) && (q.val < root.val);
//     if (isGreater) return lowestCommonAncestor(root.left, p, q);

//     const isLess = (root.val < p.val) && (root.val < q.val);
//     if (isLess) return lowestCommonAncestor(root.right, p, q);

//     return root;
// };

// var lowestCommonAncestor = function(root, p, q) {
//     if ((p.val < root.val) && (q.val < root.val)) 
//         return lowestCommonAncestor(root.left, p, q);
//     if ((root.val < p.val) && (root.val < q.val))
//         return lowestCommonAncestor(root.right, p, q);
//     return root;
// };


var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(!left) return right;
    else if(!right) return left;
    else return root;
   
};