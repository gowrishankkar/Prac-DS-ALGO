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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//      if (preorder.length == 0 || inorder.length == 0) {
//                 return null;
//             }
//             var root = new TreeNode(preorder[0]);
//             var indexinorder = inorder.indexOf(preorder[0]);
//             root.left = buildTree(preorder.slice(1, indexinorder + 1), inorder.slice(0, indexinorder));
//             root.right = buildTree(preorder.slice(indexinorder + 1, inorder.length), inorder.slice(indexinorder + 1, inorder.length));
//             return root;
    
// };



var buildTree = function(preorder, inorder) {
    const mapInOrder = new Map();
    for(let i = 0;i<inorder.length;i++){
       mapInOrder.set(inorder[i],i);
    }
    let preOrderIndex = 0;
    const helper = (startIndex,endIndex)=>{
       if(startIndex>endIndex) return null; 
       const nodeVal = preorder[preOrderIndex];
       const node = new TreeNode(nodeVal);
       const inorderIndex = mapInOrder.get(nodeVal);
       preOrderIndex ++;
       node.left = helper(startIndex,inorderIndex-1);
       node.right = helper(inorderIndex+1,endIndex);
       return node;
    };
    return helper(0,preorder.length-1);
};