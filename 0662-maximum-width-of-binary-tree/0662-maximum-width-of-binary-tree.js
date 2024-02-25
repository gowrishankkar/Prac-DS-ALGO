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


var widthOfBinaryTree = function(root) {
    if (root === null) {
    return 0;
  }

  let ans = 0;
  const q = []; // {node, index}
  q.push([root, 1]);

  while (q.length > 0) {
    const offset = q[0][1] * 2;
    ans = Math.max(ans, q[q.length - 1][1] - q[0][1] + 1);
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const node = q[0][0];
      const index = q.shift()[1];
      if (node.left !== null) {
        q.push([node.left, index * 2 - offset]);
      }
      if (node.right !== null) {
        q.push([node.right, index * 2 + 1 - offset]);
      }
    }
  }

  return ans;
};