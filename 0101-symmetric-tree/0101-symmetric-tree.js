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
 * @return {boolean}
 */
// var isSymmetric = function(root) {
    
    
 
//         if (root === null) return false;
//         return test(root.left, root.right);
 

// };

//     function test(left, right) {
//         if (left === null || right === null) return left === right 

//         if (left.val !== right.val) return false;

//         return test(left.left, right.right) && test(left.right, right.left);
//     }



var isSymmetric = function(root) {
    if (root == null) {
        return true;
    }
    return recurse(root.left, root.right);
};

var recurse = function(L, R) {
    if (L == null && R == null) return true;
    else if (L == null || R == null) return false;
    else if (L.val != R.val) return false;
    else return (recurse(L.left, R.right) && recurse(L.right, R.left));
    
};

