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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []

    const result = []
    const queue = [root]
    let flip = false

    while(queue.length){
        const currentLevel = []
        const queueLength = queue.length

        for(let i=0; i<queueLength; i++){
            const currentNode = queue.shift()

            flip ? currentLevel.unshift(currentNode.val) : currentLevel.push(currentNode.val)

            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }

        result.push(currentLevel)
        flip = !flip

       
    }
    
    return result
};