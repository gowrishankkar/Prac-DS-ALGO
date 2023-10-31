/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

var getMap = (root) =>{
    let q = [root];
    let map = {};
    while(q.length){
        let node = q.shift();
        if(node.left) {
            q.push(node.left);
            map[node.left.val] = node;
        }
        if(node.right) {
            q.push(node.right);
            map[node.right.val] = node;
        }
    }
    return map;
}
var distanceK = function(root, target, k) {
    if(!root) return []
    let map = getMap(root);
    let visited = {};
    visited[target.val] = true;
    let q = [];
    q.push(target);
    let currLevel = 0
    while(q.length){
        let size = q.length;
        if(currLevel == k) break;
        for(let i = 0; i < size ; i++){
            let node = q.shift();
            if(node.left && !visited.hasOwnProperty(node.left.val)){
                 visited[node.left.val] = true;
                q.push(node.left)
            }
            if(node.right && !visited.hasOwnProperty(node.right.val)){
                 visited[node.right.val] = true;
                q.push(node.right)
            }
            
            const parent = map[node.val];
            if(parent && !visited.hasOwnProperty(parent.val)){
                 visited[parent.val] = true;
                q.push(parent)
            }  
        }
        currLevel++;
    }
    return q.map((ele) => ele.val);

    
};


// var distanceK = function(root, target, k) {
//       const result = [];
//   const parentMap = new Map(); // Map to store parent node of each node

//   // DFS to populate parentMap
//   const dfs = (node, parent) => {
//     if (node === null) {
//       return;
//     }
//     parentMap.set(node.val, parent);
//     dfs(node.left, node);
//     dfs(node.right, node);
//   };

//   dfs(root, null); // Populate parentMap

//   // BFS to find nodes at distance k from target
//   const queue = [{ node: target, distance: 0 }];
//   const visited = new Set();
//   while (queue.length > 0) {
//     const { node, distance } = queue.shift();
//     visited.add(node.val);

//     if (distance === k) {
//       result.push(node.val);
//     } else if (distance < k) {
//       if (node.left && !visited.has(node.left.val)) {
//         queue.push({ node: node.left, distance: distance + 1 });
//       }
//       if (node.right && !visited.has(node.right.val)) {
//         queue.push({ node: node.right, distance: distance + 1 });
//       }
//       const parent = parentMap.get(node.val);
//       if (parent && !visited.has(parent.val)) {
//         queue.push({ node: parent, distance: distance + 1 });
//       }
//     }
//   }

//   return result;
// };