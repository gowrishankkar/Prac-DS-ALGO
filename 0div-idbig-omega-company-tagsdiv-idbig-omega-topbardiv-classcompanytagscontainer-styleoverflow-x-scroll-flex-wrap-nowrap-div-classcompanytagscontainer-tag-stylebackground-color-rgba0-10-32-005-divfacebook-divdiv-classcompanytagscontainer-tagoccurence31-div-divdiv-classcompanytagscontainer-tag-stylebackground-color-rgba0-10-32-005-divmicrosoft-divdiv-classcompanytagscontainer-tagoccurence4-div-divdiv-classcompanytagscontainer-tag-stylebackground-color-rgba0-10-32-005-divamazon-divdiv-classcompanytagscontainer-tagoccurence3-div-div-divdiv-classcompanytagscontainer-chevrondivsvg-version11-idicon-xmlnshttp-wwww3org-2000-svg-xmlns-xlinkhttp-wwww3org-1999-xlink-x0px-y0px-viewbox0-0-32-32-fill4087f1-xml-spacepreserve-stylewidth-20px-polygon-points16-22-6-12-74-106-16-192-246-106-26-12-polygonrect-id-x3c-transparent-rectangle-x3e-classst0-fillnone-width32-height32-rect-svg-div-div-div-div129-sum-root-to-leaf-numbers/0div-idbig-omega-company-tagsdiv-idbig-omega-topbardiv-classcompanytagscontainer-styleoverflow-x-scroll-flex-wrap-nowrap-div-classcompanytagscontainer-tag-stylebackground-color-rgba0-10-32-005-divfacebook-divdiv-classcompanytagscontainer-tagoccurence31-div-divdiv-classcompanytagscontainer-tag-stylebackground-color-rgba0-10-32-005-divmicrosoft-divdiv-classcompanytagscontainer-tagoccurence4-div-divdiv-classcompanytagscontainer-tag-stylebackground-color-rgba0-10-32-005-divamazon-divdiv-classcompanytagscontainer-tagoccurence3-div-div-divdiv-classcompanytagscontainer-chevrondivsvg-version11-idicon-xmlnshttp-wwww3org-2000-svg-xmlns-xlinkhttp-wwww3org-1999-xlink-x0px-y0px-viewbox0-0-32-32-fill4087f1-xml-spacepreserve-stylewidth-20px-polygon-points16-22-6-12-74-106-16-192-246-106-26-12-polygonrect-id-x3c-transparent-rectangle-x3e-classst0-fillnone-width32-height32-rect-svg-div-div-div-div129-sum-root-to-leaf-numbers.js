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
 * @return {number}
 */
// var sumNumbers = function(root) {
//    let res = {val : 0}, currSum = 0
//    dfs(root, currSum, res)
//    function dfs(node, currSum, res){
//         if(!node) return '';
//         if(!node.left && !node.right) res.val = res.val + Number(`${currSum}${node.val}`)
//         currSum = `${currSum}${node.val}`
//         dfs(node.left, currSum, res)
//         dfs(node.right, currSum, res)
        
//     }
//     return res.val;
// };

function sumNumbers(root) {
  function dfs(node, currentSum) {
    if (node === null) {
      return 0;
    }

    const newSum = currentSum * 10 + node.val;

    if (node.left === null && node.right === null) {
      return newSum;
    }

    const leftSum = dfs(node.left, newSum);
    const rightSum = dfs(node.right, newSum);

    return leftSum + rightSum;
  }

  return dfs(root, 0);
}