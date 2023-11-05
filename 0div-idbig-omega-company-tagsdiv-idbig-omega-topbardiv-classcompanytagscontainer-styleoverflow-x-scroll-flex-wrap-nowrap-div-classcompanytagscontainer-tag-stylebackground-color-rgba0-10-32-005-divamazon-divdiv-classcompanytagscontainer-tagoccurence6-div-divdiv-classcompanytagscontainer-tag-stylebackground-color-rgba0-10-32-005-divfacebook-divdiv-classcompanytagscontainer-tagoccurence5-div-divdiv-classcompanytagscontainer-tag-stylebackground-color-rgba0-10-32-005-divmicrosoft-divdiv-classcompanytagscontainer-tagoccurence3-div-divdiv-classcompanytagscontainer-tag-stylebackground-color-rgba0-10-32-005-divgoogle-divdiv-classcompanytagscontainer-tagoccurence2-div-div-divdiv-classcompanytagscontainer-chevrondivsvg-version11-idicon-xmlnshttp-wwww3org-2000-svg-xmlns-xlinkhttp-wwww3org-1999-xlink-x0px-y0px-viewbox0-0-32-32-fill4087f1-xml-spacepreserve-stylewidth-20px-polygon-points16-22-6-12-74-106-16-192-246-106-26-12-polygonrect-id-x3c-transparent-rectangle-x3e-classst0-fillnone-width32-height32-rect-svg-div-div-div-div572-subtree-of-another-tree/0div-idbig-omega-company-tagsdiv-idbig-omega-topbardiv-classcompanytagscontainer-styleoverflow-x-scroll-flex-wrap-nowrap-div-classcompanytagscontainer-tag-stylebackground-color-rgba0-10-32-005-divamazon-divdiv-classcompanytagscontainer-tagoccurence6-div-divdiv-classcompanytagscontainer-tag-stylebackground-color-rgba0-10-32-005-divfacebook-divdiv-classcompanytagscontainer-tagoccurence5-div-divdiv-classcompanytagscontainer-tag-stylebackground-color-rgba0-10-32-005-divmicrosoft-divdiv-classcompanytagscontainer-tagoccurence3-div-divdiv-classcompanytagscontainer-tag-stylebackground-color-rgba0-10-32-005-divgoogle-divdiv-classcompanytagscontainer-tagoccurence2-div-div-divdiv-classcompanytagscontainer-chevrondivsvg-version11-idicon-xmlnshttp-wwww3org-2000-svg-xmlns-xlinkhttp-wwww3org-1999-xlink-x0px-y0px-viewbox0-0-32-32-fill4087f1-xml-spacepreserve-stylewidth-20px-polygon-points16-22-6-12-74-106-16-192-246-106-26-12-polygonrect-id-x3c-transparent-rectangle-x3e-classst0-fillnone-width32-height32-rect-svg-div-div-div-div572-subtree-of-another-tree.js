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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSubtree = (root, subRoot) => {
    // if root null then false
    if (!root) return false

    // isSameTree helper
    const isSameTree = (n1,n2) => {
        if (!n1 && !n2) return true
        if (!n1 || !n2) return false
        if (n1.val !== n2.val) return false

        return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right)
    }

    // if isSameTree return true
    if (isSameTree(root,subRoot)) return true

    // recursively check children against subRoot
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};