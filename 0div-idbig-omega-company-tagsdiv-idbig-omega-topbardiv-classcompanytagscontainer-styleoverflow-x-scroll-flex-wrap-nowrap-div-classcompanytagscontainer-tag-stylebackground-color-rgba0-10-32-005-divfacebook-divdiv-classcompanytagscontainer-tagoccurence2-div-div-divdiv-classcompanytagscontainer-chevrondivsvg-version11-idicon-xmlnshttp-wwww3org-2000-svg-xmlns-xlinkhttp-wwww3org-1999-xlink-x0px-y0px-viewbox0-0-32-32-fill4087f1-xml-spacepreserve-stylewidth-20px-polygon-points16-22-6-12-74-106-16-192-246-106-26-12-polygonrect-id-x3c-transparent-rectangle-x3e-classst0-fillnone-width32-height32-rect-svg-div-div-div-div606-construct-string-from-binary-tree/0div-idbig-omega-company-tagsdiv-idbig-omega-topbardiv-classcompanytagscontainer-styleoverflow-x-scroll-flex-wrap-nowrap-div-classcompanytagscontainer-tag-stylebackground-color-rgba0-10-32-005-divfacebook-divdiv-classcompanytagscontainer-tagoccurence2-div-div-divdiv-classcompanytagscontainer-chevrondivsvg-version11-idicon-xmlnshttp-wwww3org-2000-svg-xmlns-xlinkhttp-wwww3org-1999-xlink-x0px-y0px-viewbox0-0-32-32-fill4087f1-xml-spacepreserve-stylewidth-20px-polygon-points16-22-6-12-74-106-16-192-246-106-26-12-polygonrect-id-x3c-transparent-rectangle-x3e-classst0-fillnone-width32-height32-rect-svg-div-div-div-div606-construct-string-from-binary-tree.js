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
 * @return {string}
 */
var tree2str = function(root) {
    const toString = (r) => {
        if(!r) return '';
        const leftStr = toString(r.left);
        const rightStr = toString(r.right);
        const str = r.val + '';
        
        if(leftStr.length == 0 && rightStr.length == 0) return str;
        else if(leftStr.length == 0) return `${str}()(${rightStr})`;
        else if(rightStr.length == 0) return `${str}(${leftStr})`;
        else return `${str}(${leftStr})(${rightStr})`
    }
    return toString(root);
};