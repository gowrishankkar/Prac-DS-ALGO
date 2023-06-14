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
var getMinimumDifference = function(root) {
    let nodeValues = []

    function dfs(node) {
        if (node == null) {
            return;
        }

        nodeValues.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    function minimumDifference(root) {
        dfs(root);

        nodeValues.sort((a,b)=>a-b);
        let minDifference = Number.MAX_VALUE;
        // Find the diff between every two consecutive values in the list.
        for (let i = 1; i < nodeValues.length; i++) {
            minDifference = Math.min(minDifference, nodeValues[i] - nodeValues[i -1 ] );
        }

        return minDifference;
    }
    return minimumDifference(root)
};