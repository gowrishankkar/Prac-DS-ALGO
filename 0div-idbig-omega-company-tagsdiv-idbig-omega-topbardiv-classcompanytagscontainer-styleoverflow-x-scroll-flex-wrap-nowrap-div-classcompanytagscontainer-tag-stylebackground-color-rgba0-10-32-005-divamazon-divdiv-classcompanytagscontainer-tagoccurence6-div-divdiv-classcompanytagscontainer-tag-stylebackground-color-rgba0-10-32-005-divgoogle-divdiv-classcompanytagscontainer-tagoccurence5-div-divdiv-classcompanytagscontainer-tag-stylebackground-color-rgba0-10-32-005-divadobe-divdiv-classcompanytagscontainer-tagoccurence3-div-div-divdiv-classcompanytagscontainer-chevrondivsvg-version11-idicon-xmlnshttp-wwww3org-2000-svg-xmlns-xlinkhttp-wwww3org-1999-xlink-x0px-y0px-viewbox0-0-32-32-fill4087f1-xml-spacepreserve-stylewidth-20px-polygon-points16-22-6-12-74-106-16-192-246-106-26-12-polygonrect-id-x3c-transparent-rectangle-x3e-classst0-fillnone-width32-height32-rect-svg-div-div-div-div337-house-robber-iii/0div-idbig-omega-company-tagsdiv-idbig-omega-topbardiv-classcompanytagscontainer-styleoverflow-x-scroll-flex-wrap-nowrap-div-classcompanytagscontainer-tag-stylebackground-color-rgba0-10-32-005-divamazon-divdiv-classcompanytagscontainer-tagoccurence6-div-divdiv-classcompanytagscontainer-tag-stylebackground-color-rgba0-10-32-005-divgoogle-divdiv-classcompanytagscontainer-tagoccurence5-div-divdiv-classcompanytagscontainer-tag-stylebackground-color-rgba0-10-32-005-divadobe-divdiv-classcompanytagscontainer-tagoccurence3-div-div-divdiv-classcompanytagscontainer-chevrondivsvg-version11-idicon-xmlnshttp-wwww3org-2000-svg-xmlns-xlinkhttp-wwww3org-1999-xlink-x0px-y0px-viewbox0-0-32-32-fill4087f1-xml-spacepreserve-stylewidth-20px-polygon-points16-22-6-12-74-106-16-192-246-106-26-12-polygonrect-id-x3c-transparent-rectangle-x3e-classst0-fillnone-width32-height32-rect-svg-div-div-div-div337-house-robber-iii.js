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
var rob = function(root) {
    function trav(n){
        
        // 0: don't choose current node
        // 1: choose current node
        
        const res = [0, 0]
        if(!n) return res
        
        const left = trav(n.left)
        const right = trav(n.right)
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        res[1] = left[0] + right[0] + n.val
        
        return res
    }
    
    return Math.max(...trav(root))
};