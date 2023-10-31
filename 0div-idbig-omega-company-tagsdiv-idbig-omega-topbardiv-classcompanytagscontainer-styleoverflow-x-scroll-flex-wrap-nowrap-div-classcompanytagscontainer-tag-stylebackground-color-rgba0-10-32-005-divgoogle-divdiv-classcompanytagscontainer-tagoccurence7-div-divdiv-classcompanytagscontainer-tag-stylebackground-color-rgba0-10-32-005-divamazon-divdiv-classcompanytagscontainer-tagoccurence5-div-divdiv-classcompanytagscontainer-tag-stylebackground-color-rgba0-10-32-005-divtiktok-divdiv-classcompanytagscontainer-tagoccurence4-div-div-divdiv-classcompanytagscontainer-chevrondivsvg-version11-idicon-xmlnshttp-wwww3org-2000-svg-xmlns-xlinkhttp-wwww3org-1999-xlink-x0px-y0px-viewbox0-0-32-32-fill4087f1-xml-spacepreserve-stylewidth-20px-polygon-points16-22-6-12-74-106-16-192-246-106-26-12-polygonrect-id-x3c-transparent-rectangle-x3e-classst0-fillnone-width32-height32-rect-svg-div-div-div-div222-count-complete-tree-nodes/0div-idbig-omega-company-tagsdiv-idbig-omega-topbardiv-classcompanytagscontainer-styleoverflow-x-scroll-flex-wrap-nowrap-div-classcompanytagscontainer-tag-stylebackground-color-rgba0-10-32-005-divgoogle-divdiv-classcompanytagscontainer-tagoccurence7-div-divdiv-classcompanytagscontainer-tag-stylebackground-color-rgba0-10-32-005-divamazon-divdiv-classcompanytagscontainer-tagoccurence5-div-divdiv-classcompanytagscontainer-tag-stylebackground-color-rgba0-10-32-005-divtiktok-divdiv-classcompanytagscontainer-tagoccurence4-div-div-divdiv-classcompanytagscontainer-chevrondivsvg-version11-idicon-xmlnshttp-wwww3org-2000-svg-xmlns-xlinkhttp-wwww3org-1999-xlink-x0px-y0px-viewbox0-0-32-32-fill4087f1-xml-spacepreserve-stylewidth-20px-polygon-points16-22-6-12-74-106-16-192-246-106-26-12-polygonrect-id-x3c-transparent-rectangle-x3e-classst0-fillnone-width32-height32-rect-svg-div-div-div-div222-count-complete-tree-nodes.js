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
var countNodes = function(root) {
    
    if(!root) return 0;
    
    let left = getLeftHeight(root);
    let right = getRightHeight(root);
    
    if(left == right) return Math.pow(2, left) - 1;
    
    return 1 + countNodes(root.left) + countNodes(root.right);
    
};

var getLeftHeight = (node) =>{
    let h = 0;
    while(node){
        h++;
        node = node.left;
    }
    return h;
}

var getRightHeight = (node) =>{
    let h = 0;
    while(node){
        h++;
        node = node.right;
    }
    return h;
}




// O(n)
// var countNodes = function(root) {
//     if(!root) return null
//     return 1 + countNodes(root.left) + countNodes(root.right);
    
// };