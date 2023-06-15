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
// var maxLevelSum = function(root) {
//     const isBaseCase = root === null;
//     if (isBaseCase) return [];
//     return bfs([ root ]) +1;
// };

// const bfs = (queue, levels = []) => {
//     let arr = []
//     while (queue.length) {
//         const level = [];
//         let sum = 0;
//         for (let i = (queue.length - 1); 0 <= i; i--) {
//             const node = queue.shift();

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
 
//             level.push(node.val);
//             sum += node.val
           
//         }
//         levels.push(level);
//         arr.push(sum)
//     }
    
//     return arr.indexOf(Math.max(...arr)); ;
// }

var maxLevelSum = function(root) {
    if(root === null) return -1;
    const queue = new Queue([root]);
    let max = -Infinity;
    let maxLvl = -1;
    let level = 1;
    
    while(queue.size() > 0) {
        const len = queue.size();
        let sum = 0;
        
        for(let i = 0; i < len; i++) {
            const current = queue.dequeue();
            sum += current.val;
            if(current.left) queue.enqueue(current.left);
            if(current.right) queue.enqueue(current.right);
        }
        
        if(sum > max) {
            max = sum;
            maxLvl = level;
        }
        level++;
    }
    
    return maxLvl;
};
