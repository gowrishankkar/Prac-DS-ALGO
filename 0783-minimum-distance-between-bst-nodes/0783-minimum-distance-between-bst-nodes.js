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
var minDiffInBST = function(root) {
    let minArr = []
    
    
    let BST = (root) => {
        
        if (root == null) return
        
        BST(root.left)
        minArr.push(root.val)
        BST(root.right)
    }
    

    BST(root)
    
    let res = Number.MAX_VALUE
  
    for(let i = 0; i < minArr.length - 1; i++) {

        res = Math.min(res, minArr[i + 1] - minArr[i])
    }
    
    return res
        
    
    
    
};