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
// var countNodes = function(root) {
//     if(!root) return 0;
//     let left = getLeftHeight(root);
//     let right = getRightHeight(root);
//     if(left == right) return Math.pow(2, left) - 1;
//     return 1 + countNodes(root.left) + countNodes(root.right);
// };

// var getLeftHeight = (node) =>{
//     let h = 0;
//     while(node){
//         h++;
//         node = node.left;
//     }
//     return h;
// }

// var getRightHeight = (node) =>{
//     let h = 0;
//     while(node){
//         h++;
//         node = node.right;
//     }
//     return h;
// }




// O(n)
// var countNodes = function(root) {
//     if(!root) return null
//     return 1 + countNodes(root.left) + countNodes(root.right);
    
// };


var countNodes = function(root) {
    if(!root) return null;
    let stack = [root];
    let c = 0;
    while(stack.length) {
        let node = stack.pop() ;
        node.left && stack.push(node.left);        
        node.right && stack.push(node.right);
		// if(node.val) will take node value 0 as falsy, so make sure to check for 0 as well, since a node can have a value of 0
        if(node.val >= 0) c++;
    }
    return c;
};