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
// var preorderTraversal = function(root) {
//     let result = [];
// 		Traversal(root, result);
// 		return result;
    
// };

// function Traversal(A, arrayToStore) {
// 		if (A == null) return;
// 		arrayToStore.push(A.data);
// 		Traversal(A.left, arrayToStore);
		
// 		Traversal(A.right, arrayToStore);
// 	}


var preorderTraversal = function(root) {
    let output = [];
    function foo (node) {
        if(!node) return;
        output.push(node.val);
        foo(node.left);
        foo(node.right);
    }
    foo(root);
    return output;
};