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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    const evaluation = (root) => {
        if (root.left)
            if (root.val == 3)
                return evaluation(root.left) && evaluation(root.right)
            else
                return evaluation(root.left) || evaluation(root.right)
        return root.val
    }
    return evaluation(root)
};