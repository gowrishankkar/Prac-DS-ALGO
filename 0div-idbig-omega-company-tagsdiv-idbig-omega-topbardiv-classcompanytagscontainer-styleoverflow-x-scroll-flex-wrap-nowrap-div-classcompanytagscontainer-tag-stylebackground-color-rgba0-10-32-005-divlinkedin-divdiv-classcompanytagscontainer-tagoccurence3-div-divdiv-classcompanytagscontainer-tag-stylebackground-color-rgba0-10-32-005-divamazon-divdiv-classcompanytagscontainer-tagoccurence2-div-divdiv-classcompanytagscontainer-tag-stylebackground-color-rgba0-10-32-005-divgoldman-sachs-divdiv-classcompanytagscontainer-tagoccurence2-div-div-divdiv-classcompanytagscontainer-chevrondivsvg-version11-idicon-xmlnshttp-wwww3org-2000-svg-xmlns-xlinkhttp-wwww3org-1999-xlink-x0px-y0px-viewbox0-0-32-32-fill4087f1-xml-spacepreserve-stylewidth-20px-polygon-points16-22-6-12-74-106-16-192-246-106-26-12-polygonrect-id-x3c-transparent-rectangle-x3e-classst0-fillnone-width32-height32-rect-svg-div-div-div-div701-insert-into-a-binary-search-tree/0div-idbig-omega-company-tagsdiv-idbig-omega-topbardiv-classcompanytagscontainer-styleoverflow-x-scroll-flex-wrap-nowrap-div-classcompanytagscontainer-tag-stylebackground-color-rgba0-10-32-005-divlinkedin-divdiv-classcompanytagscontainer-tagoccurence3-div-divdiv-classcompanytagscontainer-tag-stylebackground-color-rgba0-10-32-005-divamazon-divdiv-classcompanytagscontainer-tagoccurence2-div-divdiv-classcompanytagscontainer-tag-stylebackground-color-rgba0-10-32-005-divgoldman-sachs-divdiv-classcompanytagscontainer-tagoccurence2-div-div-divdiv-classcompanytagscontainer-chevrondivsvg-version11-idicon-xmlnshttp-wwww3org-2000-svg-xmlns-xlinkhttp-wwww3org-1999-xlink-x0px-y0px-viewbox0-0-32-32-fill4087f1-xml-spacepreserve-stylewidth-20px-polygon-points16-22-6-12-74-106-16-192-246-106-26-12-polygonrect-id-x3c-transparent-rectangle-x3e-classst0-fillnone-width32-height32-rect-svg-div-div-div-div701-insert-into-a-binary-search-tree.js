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
// var insertIntoBST = function(root, val) {
//     if(!root) return new TreeNode(val);
//     let n = root;
//     while(true){
//         if(n.val <= val){
//             if(n.right) n = n.right;
//             else {
//                 n.right = new TreeNode(val);
//                 break;
//             }
//         }else {
//              if(n.left) n = n.left;
//             else {
//                 n.left = new TreeNode(val);
//                 break;
//             }
//         }
//     }
//     return root
// };


var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val)
    }
    
    const dfs = (node, value) => {
        if (node.val > value) {
            if (node.left === null) {
                node.left = new TreeNode(val)
            } else dfs(node.left, val)
        } else {
            if (node.right === null) {
                node.right = new TreeNode(val)
            } else dfs(node.right, val)
        }
        
    }
    
    dfs(root, val)
    
    return root
    
};