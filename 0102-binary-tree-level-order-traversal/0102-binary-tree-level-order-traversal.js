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
var levelOrder = function(root) {
    let ans =[];
    let s=[];
    if(root === null) return [];
    s.push(root);
    while(s.length > 0){
        let level =[];
        let size=s.length;
        for(let i=0; i<size;i++){
           let node = s.shift();
            if(node.left)
                s.push(node.left); 
            if(node.right)
                s.push(node.right);
            level.push(node.val)
        }
        ans.push(level);
    }
    return ans;
};