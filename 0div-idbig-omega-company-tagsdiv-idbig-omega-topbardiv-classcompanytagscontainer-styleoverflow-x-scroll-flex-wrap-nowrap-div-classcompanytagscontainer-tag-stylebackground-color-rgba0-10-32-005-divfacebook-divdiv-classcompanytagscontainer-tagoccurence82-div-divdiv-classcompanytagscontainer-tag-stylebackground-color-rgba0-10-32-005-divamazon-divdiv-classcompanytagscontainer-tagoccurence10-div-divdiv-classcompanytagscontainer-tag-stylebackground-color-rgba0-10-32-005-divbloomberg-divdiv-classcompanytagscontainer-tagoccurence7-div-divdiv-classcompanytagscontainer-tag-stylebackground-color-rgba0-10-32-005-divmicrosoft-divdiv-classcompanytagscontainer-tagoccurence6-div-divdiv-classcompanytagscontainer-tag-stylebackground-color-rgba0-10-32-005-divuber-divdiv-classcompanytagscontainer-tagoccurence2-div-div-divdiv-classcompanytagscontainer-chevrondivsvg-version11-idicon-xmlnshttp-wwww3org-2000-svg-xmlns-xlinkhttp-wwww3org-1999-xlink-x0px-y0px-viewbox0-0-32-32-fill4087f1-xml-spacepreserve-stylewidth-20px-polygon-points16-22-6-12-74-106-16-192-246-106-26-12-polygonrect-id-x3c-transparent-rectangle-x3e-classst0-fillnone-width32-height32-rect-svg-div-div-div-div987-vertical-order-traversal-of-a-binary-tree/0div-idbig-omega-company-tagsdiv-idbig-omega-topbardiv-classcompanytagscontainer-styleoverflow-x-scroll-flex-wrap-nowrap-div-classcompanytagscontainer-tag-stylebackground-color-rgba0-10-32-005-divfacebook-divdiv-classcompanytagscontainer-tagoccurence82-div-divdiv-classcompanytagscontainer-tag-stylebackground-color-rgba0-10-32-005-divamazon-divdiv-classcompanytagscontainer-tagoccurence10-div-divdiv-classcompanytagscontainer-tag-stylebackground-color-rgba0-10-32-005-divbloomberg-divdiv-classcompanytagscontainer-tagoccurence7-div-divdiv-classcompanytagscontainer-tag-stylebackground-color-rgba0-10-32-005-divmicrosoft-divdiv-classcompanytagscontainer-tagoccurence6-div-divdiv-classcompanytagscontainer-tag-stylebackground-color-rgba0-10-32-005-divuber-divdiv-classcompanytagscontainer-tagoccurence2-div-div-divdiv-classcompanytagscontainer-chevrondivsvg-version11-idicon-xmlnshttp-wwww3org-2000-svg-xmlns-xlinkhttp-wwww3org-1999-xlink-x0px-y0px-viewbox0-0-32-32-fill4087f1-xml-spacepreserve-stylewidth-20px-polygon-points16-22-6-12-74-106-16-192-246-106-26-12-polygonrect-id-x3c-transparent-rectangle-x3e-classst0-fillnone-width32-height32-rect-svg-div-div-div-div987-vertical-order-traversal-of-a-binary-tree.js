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
//  */
// var verticalTraversal = function(root) 
// {
//         let colMap = {}, min=0,max=0;
        
//         const dfs = function(node,x=0,y=0)
//         {
//                 if(node === null)
//                         return;
                
//                 /* Push the item onto the appropriate x listing. */
//                 let item = colMap[x];
//                 if(item === undefined)
//                 {
//                         item = [];
//                         min = Math.min(min,x);
//                         max = Math.max(max,x);
//                 }
//                 item.push({y,val:node.val});
//                 colMap[x] = item;
//                 dfs(node.left,x-1,y+1);
//                 dfs(node.right,x+1,y+1);
//         }

//         dfs(root);

//         let result = [];
//         for(let i=min; i<= max; i++)
//         {
//                 colMap[i].sort((a,b)=>(a.y===b.y)?a.val-b.val:a.y-b.y);
//                 result.push(colMap[i].map(el=>el.val));
//         }

//         return result;
// };


// var verticalTraversal = function(root) 
// {
//      let map = {}
//         const dfs = (node, v, lev) =>{
//             if(node == null) return;
//             if(!map[v]) map[v] = []
//             map[v] = [...map[v], {lev, val : node.val}];
//             dfs(node.left, v - 1, lev + 1);
//             dfs(node.right, v + 1, lev + 1);
//         }
        
//         dfs(root, 0, 0);
//         console.log('map', map)
    
//         const sortedKeys = Object.keys(map).sort()
//         console.log('data', sortedKeys)
//         let result = [];
//         Object.keys(map).sort((a,b)=> a-b).forEach((key) =>{
//             // let item = []
//             map[key].sort((a,b)=>(a.lev===b.lev)?a.val-b.val:a.lev-b.lev);
//              result.push(map[key].map(el=>el.val));
//             // map[key].forEach(({val})=>{
//             //     item.push(val)
//             // })
//             // result.push(item)
//         })
//     return result;
// };


var verticalTraversal = function(root) {
  let map = {};
  const traverse = (node, row = 0, col = 0) => {
    if (!node) return;
    if (!map[col]) map[col] = [];
    if (!map[col][row]) map[col][row] = [];
    map[col][row].push(node.val);
    traverse(node.left, row + 1, col - 1);
    traverse(node.right, row + 1, col + 1);
  }
  traverse(root);
  
  let sortedKeys = Object.keys(map).sort((a, b) => a - b);
  return sortedKeys.map(key => map[key].reduce((acc, curr) => {
    acc.push(...curr.sort((a, b) => a - b));
    return acc;
  }, []));
};