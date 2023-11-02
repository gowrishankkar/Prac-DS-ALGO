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

// var prev = null, mid = null, last = null, first = null;
// var recoverTree = function(root) {
//     prev =  new TreeNode(-Infinity);

//     var inorder = (node) =>{
//         if(!node) return;
//         inorder(node.left);
//         if(prev != null && (node.val < prev.val)){
            
//             if(first == null){
//                 first = prev;
//                 middle = node;
//             }else last = node;
//         }
        
//         prev = node;
//         inorder(node.right);
//     }

//         inorder(root);
    
//     if(first && last){
//         let t =  first.val;
//         first.val = last.val ;
//         last.val = t;
//     } else if(first && middle){
//         let t =  first.val;
//         first.val = middle.val ;
//         middle.val = t;
//     }
//     return root;
// };


var recoverTree = function(root) {
    let small = null, big = null, prev = null;
    let inorder = function(r) {
        if (r == null) return;
        inorder(r.left);
        if (prev && prev.val > r.val) {
            small = r;
            if(big) return;
            big = prev;
        }
        prev = r;
        inorder(r.right);
        return;
    }
    inorder(root);
    [small.val, big.val] = [big.val, small.val];
};