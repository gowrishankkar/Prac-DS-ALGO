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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let set = new Set()
    let setAdded = new Set()
    let res = []
    iter2(root.left, "l")
    iter2(root.right, "r")
    return res

    function iter2(node, way){
        if (!node) return ""
        let currentRes = String(node.val)
        let leftRes = ""
        let rightRes = ""
        leftRes = iter2(node.left, "l")
        rightRes = iter2(node.right, "r")
        if (set.has(leftRes + String(currentRes) + rightRes)){
            if (!setAdded.has(leftRes + String(currentRes) + rightRes)){
                res.push(node)
                setAdded.add(leftRes + String(currentRes) + rightRes)
             }
        } else {
             set.add(leftRes + String(currentRes) + rightRes)
        }
        return leftRes + String(currentRes) + way + rightRes
    }
};