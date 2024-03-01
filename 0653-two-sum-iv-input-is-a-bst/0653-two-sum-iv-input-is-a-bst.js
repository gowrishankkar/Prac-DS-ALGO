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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let stack = [root]
    let map = {}
    
    while (stack.length > 0) {
        let cur = stack.pop()
        if (map[k - cur.val]) return true
        map[cur.val] = true;
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return false
};