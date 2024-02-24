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
// var verticalTraversal = function(root) 
// {
//      let map = {}
//       if(root == null) return;
//      let s = [[root, 0, 0]];
    
//       while(s.length){
//           let [node , v, lev] = s.pop();
//            if(!map[v]) map[v] = []
//            map[v] = [...map[v], {lev, val : node.val}];
//           node.left && s.push([node.left, v - 1, lev + 1])
//           node.right && s.push([node.right, v + 1, lev + 1])
//       }
//         let result = [];
//         Object.keys(map).sort((a,b)=> a-b).forEach((key) =>{
//             map[key].sort((a,b)=>(a.lev===b.lev)?a.val-b.val:a.lev-b.lev);
//             result.push(map[key].map(el=>el.val));

//         })
//     return result;
// };


var verticalTraversal = function(root) {
    //1. intialise nodeInfos horizontal array that holds the x, y, & val information of each node traversed: const nodeInfos = []
    const nodeInfos = [];
    //STEP1: GET NODE'S INFO ARRAY WITH DFS
    //call recusive function
    dfs(root, 0, 0);
	//STEP2: TAKE DFS RESULT ARRAY AND SORT IT ACCORDING TO THE TASK
    //take array preproceeded by recursion and sort by the following order of importance before mapping: 
    //x - coordinate(asc), 
    //y - coordinate precedence given to higher value(desc)
	//node val in ascending order(asc)
    nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
    //STEP3: MAP 'X' COORDINATES TO ITS VALUES IN THE MAP
    //create and fill vertical map that save nodes:
    // x: [...values] => { -1 => [ 9 ], 0 => [ 3, 15 ], 1 => [ 20 ], 2 => [ 7 ] } => map = new Map();
    let map = new Map();
    for (const [x, y, val] of nodeInfos) {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    //STEP4: RETURN MAP'S GROUPED VALUES
    return [...map.values()];
    
    //6. Get info about each node(x, y, value) and save into thearray:  => 
    //write inorder dfs, only difference, apart from value we add x, y coorditanes
    function dfs(node, x, y) {//start from root node => [root, 0, 0]
        if(!node) return;

        dfs(node.left, x - 1, y - 1); // traverse left: left: x-1, down: y-1
        nodeInfos.push([x, y, node.val]);
        dfs(node.right, x + 1, y - 1); // traverse right: right: x+1, down: y-1
    }
};