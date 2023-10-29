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
 * @return {string[]}
 */
// var binaryTreePaths = function(root) {
//     if(!root) return [];
//     let res= [];
//     const dfs = (node, res, path) =>{
//         if(!node) return '';
//         let newPath = !path ? `${node.val}` : `${path}->${node.val}`;
//         if(!node.left && !node.right) res.push(newPath);
        
//         dfs(node.left , res, newPath);
//         dfs(node.right , res, newPath)
        
//     }
//     dfs(root, res, ``);
//     return res;
// };

// var binaryTreePaths = function(root) {
//     let res = [];
//     function DFS(root, curr){
//         if(!root) return;
//         if(!root.left && !root.right){
//             res.push(curr + root.val);
//             return;
//         }
//         DFS(root.left, curr + root.val + "->");
//         DFS(root.right, curr + root.val + "->");
//     }
//     DFS(root, "");
//     return res;
// };

var binaryTreePaths = function(root) {
    let res= [];
    const dfs = (node, path) =>{
        if(!node) return ;
        let newPath = path + node.val;
        if(!node.left && !node.right) res.push(newPath);
        dfs(node.left , newPath + '->');
        dfs(node.right , newPath + '->')
        
    }
    dfs(root, "");
    return res;
};
