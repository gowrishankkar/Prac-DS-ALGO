/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// var bstFromPreorder = function(preorder) {
//     let i = 0;
//     function build(A, i, bound){
//         if(i == A.length || A[i] > bound) return null;
//         let root = new TreeNode(A[i]);
//         i++;
//         root.left =  build(A, i, root.val);
//         root.right =  build(A, i, bound);
//         return root;
//     }
//     return build(preorder, i, Infinity)
// };


// var bstFromPreorder = function (preorder) {
//         if (preorder.length === 0) return null
//         if (preorder.length === 1) return new TreeNode(preorder[0])
//         let root = new TreeNode(preorder[0])
//         let left = bstFromPreorder(preorder.slice(1).filter(each => each < preorder[0]))
//         let right = bstFromPreorder(preorder.slice(1).filter(each => each > preorder[0]))
//         if (root) root.left = left;
//         if (root) root.right = right;
//         return root
// };


var bstFromPreorder = function (preorder) {
    let i = 0;
    return build(preorder);


    function build(arr, min =  Number.MIN_SAFE_INTEGER, max =  Number.MAX_SAFE_INTEGER) {
      if (i === arr.length || arr[i] < min || arr[i] > max) {
            return null
        }
        let root = new TreeNode(arr[i++])
        root.left = build(arr, min , root.val)
        root.right = build(arr, root.val , max)

        return root

    }
};