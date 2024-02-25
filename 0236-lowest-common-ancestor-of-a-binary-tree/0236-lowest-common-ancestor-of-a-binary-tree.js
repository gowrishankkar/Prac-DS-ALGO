/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function dfs(start = root) {
    if (!start || start === p || start === q) return start;
    const [left, right] = [dfs(start.left), dfs(start.right)];
    return left && right ? start : left || right;
  }
  return dfs();
};
