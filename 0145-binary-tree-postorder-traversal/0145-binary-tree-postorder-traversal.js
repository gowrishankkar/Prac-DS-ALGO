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
 * @return {number[]}
 */


// var postorderTraversal = function(root) {
//     let output = [];
//     function foo (node) {
//         if(!node) return;
//         foo(node.left);
//         foo(node.right);
//          output.push(node.val);
//     }
//     foo(root);
//     return output;
// };


// var postorderTraversal = function(root) {
//    let s1 = []
//    let s2 = [];
//     let result = []
//     if(root ==  null) return []
//     s1.push(root);
//     while(s1.length){
//         let node = s1.pop();
//         s2.push(node.val);
//         if(node.left !== null) s1.push(node.left)
//         if(node.right !== null) s1.push(node.right)
        
//     }
    
//     console.log(s2,'test')
    
//     while(s2.length){
//         result.push(s2.pop())
//     }
//     return result
// };




var postorderTraversal = function(root) {
    let s1 = []
    let result = []
    if(root ==  null) return []
    s1.push(root);
    while(s1.length){
        let node = s1.pop();
        result.unshift(node.val);
        if(node.left !== null) s1.push(node.left)
        if(node.right !== null) s1.push(node.right)
        
    }

    return result
};
