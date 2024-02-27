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
        let ans = [];
        // let result = []
        function inorder(A, ans) {
            if (A){
                inorder(A.left, ans);
                if (ans.length == k) return;
                ans.push(A.val)
                inorder(A.right, ans);
            }
        }
        inorder(root, ans)
        return ans[k-1]
};

// var kthSmallest = function(root, k) {
    
//     let sortedArr=[]
//     inOrder(root, sortedArr)

//     function inOrder(node, sortedArr){
//         if(node){
//             inOrder(node.left, sortedArr)
//             if(sortedArr.length===k )return 
//             sortedArr.push(node.val)
//             inOrder(node.right,sortedArr)
//         }
//     }

//     return sortedArr[k-1]
// };