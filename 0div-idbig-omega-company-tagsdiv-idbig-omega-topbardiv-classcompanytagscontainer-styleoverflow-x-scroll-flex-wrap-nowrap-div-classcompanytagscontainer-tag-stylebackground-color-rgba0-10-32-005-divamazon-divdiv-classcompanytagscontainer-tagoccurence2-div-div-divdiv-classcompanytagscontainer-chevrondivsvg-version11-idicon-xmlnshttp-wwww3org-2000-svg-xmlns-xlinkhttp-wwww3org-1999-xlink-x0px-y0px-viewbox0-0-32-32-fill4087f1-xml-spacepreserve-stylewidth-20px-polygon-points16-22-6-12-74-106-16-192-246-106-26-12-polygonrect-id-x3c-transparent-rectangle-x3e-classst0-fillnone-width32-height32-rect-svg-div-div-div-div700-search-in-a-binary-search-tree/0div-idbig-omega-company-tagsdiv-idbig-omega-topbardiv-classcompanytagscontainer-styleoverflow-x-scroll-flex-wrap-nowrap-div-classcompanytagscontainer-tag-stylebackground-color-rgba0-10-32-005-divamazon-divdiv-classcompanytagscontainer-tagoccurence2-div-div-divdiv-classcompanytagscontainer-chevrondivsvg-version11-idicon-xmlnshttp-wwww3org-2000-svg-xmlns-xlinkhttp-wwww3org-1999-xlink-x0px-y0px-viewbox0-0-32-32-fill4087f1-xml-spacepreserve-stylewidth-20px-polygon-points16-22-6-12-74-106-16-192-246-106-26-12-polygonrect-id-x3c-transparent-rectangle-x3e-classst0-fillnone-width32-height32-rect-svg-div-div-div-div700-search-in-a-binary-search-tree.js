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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(A, B) {
    
//     let n = getNode(A, B)
//     function getNode(A, B){
//         if (!A) {
//             return null;
//         }
//         if (A.val == B) {
//             return A;
//         }
//         if (A.val > B) {
//             return getNode(A.left, B);
//         } else {
//             return getNode(A.right, B);
//         }
//     }
//     console.log('n', n)
//     return n 
     
// };


// var searchBST = function(A, B) {
//     while(A !==null && A.val !== B){
//         A = B < A.val ? A.left : A.right;
//     }
//     return A;
     
// };


var searchBST = function(root, val) {
    let treeNode = null
    const recursiv = (root, val) => {
        if(root.val === val) {
            treeNode = root
            return
        }
        if(root && root.right) {
            recursiv(root.right, val)
        }
        if(root && root.left) {
            recursiv(root.left, val)
        }
    }
    recursiv(root,val)

    return treeNode
};