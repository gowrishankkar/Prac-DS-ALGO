/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return "";

    const res = [];
    const stack = [root];

    while(stack.length) {
        const node = stack.pop();

        res.push(node?.val ?? '-');

        if (node) stack.push(node.right);
        if (node) stack.push(node.left);
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return null;

    const vals = data.split(',');
    let i = 0;

    function dfs(val) {
        if (val == '-') {
            i += 1;
            return null;
        }

        let node = {
            val,
            left: null,
            right: null
        };

        i += 1;

        node.left = dfs(vals[i]);
        node.right = dfs(vals[i]);

        return node;
    }

    return dfs(vals[i]);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */