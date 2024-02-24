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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    const s = [];
    s.push(root);
    let res = [];
    let dir = true;
    while(s.length){
       let level = []
       for (let i = (s.length - 1); 0 <= i; i--) {
            const node = s.shift();
           console.log('node', node)
            node?.left && s.push(node.left);
            node?.right &&  s.push(node.right);
            level.push(node.val);
        }
        console.log('level', level)
        res.push(dir ? level : level.reverse());
        dir = !dir
    }
    return res;
};