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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function(root) {
//     if(!root) return [];
//     let curr = root;
//     while(curr){
//         if(curr.left){
//             let prev = curr.left;
//             while(prev.right) prev = prev.right;
//             prev.right = curr.right;
//             curr.right = curr.left;
            
//         }
//         curr.left = null;
//         curr = curr.right;
    
//     }
//     return curr;
   
// };


// var flatten = function(root) {
//     let s = [];
//     s.push(root)
//     while(s.length){
//         let curr = s.pop();
//         if(curr?.right) s.push(curr.right);
//         if(curr?.left) s.push(curr.left);
//         if(s.length) curr.right = s[s.length - 1];
//         if(curr?.left) curr.left = null;
//     }
//     return root;
// };



// var flatten = function(root) {
//     let s = [];
//     s.push(root)
//     while(s.length){
//         let curr = s.pop();
//         if(curr?.right) s.push(curr.right);
//         if(curr?.left) s.push(curr.left);
//         if(s.length) curr.right = s[s.length - 1];
//         if(curr?.left) curr.left = null;
//     }
//     return root;
// };


var flatten = function(root) {
   let curr = root;
    while(curr){
        if(curr.left){
            let prev = curr.left;
            while(prev.right) {
                prev = prev.right;
            }
            prev.right =  curr.right;
            curr.right = curr.left
        }
        curr.left = null;
        curr = curr.right;
    }
    return root;
};
