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
 * @return {number}
 */
var kthSmallest = function(root, k) {
        let c = 0;
        let ans = 0;
        // let result = []
        function inorder(A) {
            if (A === null) return;
            inorder(A.left);
            c++
            if (c == k) ans = A.val
            inorder(A.right);
        }
        inorder(root)
        return ans
};