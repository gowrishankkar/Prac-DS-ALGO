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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    const dfs = (root, parent = null, left = null) => {
        if (root.left)
            dfs(root.left, root, true)
        if (root.right)
            dfs(root.right, root, false)
        if (root.val == target && !root.left && !root.right)
            if (parent)
                if (left)
                    parent.left = null
                else
                    parent.right = null
    }
    dfs(root)
    if (root.val == target && !root.left && !root.right)
        return null
    return root
};