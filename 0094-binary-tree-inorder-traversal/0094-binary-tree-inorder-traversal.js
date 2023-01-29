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

//  var inorderTraversal = function (root, list = []) {

//     if (!root) return [];
    
//     inorderTraversal(root.left, list);
//     list.push(root.val)
//     inorderTraversal(root.right, list);
    
//     return list
// };


 var inorderTraversal = function (root) {
     let stack = [];
     let result = [];
      if (!root) return [];
     let node = root;
     
     while(stack.length || node != null ){
         while (node != null){
             stack.push(node);
             node = node.left
         }
             console.log('stack', stack)
             let pop = stack.pop();
             
             result.push(pop.val);
             node = pop.right
         
     }
     
     return result;

};