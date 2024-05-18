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
var distributeCoins = function(root) {
    const dfs = (root) => {
        let left = 0, right = 0
        if (root.left)
            left = dfs(root.left)
        if (root.right)
            right = dfs(root.right)
        ans = left + right + root.val - 1
        this.s += Math.abs(ans)
        return ans
    }
    this.s = 0
    dfs(root)
    return this.s
};