/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length == 0 || inorder.length == 0) {
        return null;
    }
    let n = postorder.length - 1
    var root = new TreeNode(postorder[n]);
    var indexinorder = inorder.indexOf(postorder[n]);
    root.left = buildTree(inorder.slice(0, indexinorder), postorder.slice(0, indexinorder));
    root.right = buildTree(inorder.slice(indexinorder + 1, inorder.length),postorder.slice(indexinorder, postorder.length - 1));
    return root;
    
    
//       if(inorder.length === 0) return null;
//         let root_val = postorder[postorder.length - 1];
//         let root = new TreeNode(root_val);
//         let i = inorder.indexOf(root_val);

//         let L_In = inorder.slice(0, i);
//         let R_In = inorder.slice(i+1, inorder.length);
//         let L_Post = postorder.slice(0 , i);
//         let R_Post = postorder.slice(i, postorder.length - 1)

//         root.left = buildTree(L_In, L_Post);
//         root.right = buildTree(R_In, R_Post);
//         return root;
    
};

//     root.left = buildTree(postorder.slice(1, indexinorder + 1), inorder.slice(0, indexinorder));
//     root.right = buildTree(postorder.slice(indexinorder + 1, inorder.length), inorder.slice(indexinorder + 1, inorder.length));

      // let L_In = inorder.slice(0, i);
      //   let R_In = inorder.slice(i+1, inorder.length);
      //   let L_Post = postorder.slice(0 , i);
      //   let R_Post = postorder.slice(i, postorder.length - 1)