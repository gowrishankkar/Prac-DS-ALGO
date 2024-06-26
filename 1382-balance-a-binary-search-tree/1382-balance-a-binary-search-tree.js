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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const nodes = []
    !function traverse(root) {
        if (root.left)  traverse(root.left)
        nodes.push(root)
        if (root.right) traverse(root.right)
    }(root)
    
    
    for (const node of nodes.values())
        node.left = node.right = null
    
    
    const len = nodes.length
    function makeTree(fromIndex, toIndex) {
        if (fromIndex === toIndex)  return nodes[fromIndex]
        if (fromIndex > toIndex)    return null
        
        const count = 1 + toIndex - fromIndex
        const half = count >> 1
        const result = nodes[fromIndex + half]
        let leftResult = makeTree(fromIndex, -1 + fromIndex + half)
        let rightResult = makeTree(1 + fromIndex + half, toIndex)
        
        result.left = leftResult
        result.right = rightResult
        return result
    }
    
    
    let result = makeTree(0, -1 + len)
    return result
};