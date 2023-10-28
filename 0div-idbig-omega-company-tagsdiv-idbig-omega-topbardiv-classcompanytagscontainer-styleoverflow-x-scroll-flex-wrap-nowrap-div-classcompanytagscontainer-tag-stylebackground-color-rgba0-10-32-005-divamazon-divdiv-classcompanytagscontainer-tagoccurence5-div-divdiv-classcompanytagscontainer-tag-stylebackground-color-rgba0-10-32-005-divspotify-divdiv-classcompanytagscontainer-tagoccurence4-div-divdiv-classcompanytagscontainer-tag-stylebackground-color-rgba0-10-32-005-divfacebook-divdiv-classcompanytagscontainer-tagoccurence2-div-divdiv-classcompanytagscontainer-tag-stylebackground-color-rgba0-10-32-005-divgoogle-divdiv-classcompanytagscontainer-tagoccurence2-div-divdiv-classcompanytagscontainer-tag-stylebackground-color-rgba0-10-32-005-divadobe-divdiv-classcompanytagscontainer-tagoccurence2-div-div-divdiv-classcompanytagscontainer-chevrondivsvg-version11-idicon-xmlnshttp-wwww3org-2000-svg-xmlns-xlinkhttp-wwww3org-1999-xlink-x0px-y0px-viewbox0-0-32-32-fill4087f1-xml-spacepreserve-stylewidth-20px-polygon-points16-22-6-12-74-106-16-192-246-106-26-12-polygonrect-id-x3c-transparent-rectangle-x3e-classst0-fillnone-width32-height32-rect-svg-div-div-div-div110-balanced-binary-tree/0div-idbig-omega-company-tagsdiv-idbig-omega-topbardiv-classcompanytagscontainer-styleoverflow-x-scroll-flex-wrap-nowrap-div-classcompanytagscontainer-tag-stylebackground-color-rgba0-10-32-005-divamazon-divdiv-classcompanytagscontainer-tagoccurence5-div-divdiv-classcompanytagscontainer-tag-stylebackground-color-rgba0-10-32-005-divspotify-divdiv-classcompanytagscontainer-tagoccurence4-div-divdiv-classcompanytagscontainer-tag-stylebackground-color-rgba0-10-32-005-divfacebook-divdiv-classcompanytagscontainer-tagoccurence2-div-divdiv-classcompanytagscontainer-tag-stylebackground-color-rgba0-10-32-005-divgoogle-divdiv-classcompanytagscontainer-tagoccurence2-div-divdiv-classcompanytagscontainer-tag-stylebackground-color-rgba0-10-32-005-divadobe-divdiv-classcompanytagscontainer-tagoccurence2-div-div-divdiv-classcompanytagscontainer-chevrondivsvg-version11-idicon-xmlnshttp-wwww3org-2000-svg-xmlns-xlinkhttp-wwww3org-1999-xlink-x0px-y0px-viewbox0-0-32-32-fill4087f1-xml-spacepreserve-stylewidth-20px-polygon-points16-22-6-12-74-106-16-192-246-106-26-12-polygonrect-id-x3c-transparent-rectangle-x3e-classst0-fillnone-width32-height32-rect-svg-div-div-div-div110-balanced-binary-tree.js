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
// var isBalanced = function (root) {
//     const [ _height, _isBalanced ] = isRootBalanced(root);

//     return _isBalanced;
// };

// var isRootBalanced = (root) => {
//     const isBaseCase = root === null
//     if (isBaseCase) return [ -1, true ];

//     return dfs(root)
// }

// var dfs = (root) => {
//     const [ left, isLeftBalanced ] = isRootBalanced(root.left);
//     const [ right, isRightBalanced ] = isRootBalanced(root.right);
//     const [ height, difference ]  = [ Math.max(left, right), Math.abs(left - right) ];

//     const isAcceptableHeight = difference <= 1;
//     const _isBalanced = isLeftBalanced && isRightBalanced;

//     const _isRootBalanced = _isBalanced && isAcceptableHeight;

//     return [ (height + 1), _isRootBalanced ];
// }

var isBalanced = function (root) {
    const  data = dfs(root);

    return data != -1;
};

var dfs = (root) => {
    if(!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    if(right == -1 || left == -1) return -1;
    if(Math.abs(left - right ) > 1)return -1;
    return Math.max(left , right) + 1; 
    
    
}