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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
        let c = 0;
        let ans = 0;
        // let result = []
        function inorder(A) {
            if (A){
            inorder(A.left);
            c++
            if (c == k) {
                ans = A.val;
                return;
            }
            inorder(A.right);
            }
        }
        inorder(root)
        return ans
};

var kthSmallest = function(root, k) {
    
    let sortedArr=[]
    inOrder(root, sortedArr)

    function inOrder(node, sortedArr){
        if(node){
            inOrder(node.left, sortedArr)
            if(sortedArr.length===k )return 
            sortedArr.push(node.val)
            inOrder(node.right,sortedArr)
        }
    }

    return sortedArr[k-1]
};