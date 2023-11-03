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
 * @param {number} key
 * @return {TreeNode}
 */

var getLastRight = (root) =>{
    if(!root.right) return root;
    return getLastRight(root.right)
}
var helper = (root) => {
    if(!root.left) return root.right;
    if(!root.right) return root.left;
    let rightChild =  root.right;
    let lastChild = getLastRight(root.left);
    lastChild.right = rightChild;
    return root.left;
}
var deleteNode = function(root, key) {
    if(!root) return null;
    if(root.val == key) return helper(root);
    let dummy = root;
    while(root){
        if(root.val > key){
            if(root.left && root.left.val == key){
                root.left = helper(root.left)
                break;
            } else root = root.left;
        } else {
            if(root.right && root.right.val == key){
                root.right = helper(root.right)
                break;
            } else root = root.right;
        }

    }
    return dummy;
    
};