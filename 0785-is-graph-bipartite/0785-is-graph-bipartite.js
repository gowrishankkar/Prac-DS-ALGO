/**
 * @param {number[][]} graph
 * @return {boolean}
 */
// var isBipartite = function(graph) {
//     let color = new Array(graph.length).fill(-1)
//     const check =(graph, color, start) =>{
//         let q = [];
//         q.push(start)
//         color[start] = 0;
       
//         while(q.length){
//             let node = q.pop();
//             for(let i of graph[node]){
//                 if(color[i] == -1){
                    
//                 color[i] = !color[node];
//                 q.push(i)
//                     console.log('color', color)
//                 }
//                 else if(color[i] === color[node]) {
//                     console.log('color', color)
//                     return false}
//             }
//         }
//         return true
//     }
    
//     for(let i = 0; i <graph.length ; i++){
//         if(color[i] === -1 && !check(graph, color, i)) return false
//     }
//     return true

    
// };

// BDS
// var isBipartite = function(graph) {
//     let colors = new Array(graph.length).fill(-1);
//     for (let i = 0; i < graph.length; i++){
//         if (colors[i] === -1){
//             let queue = [i];
//             colors[i] = 0;
//             while (queue.length){
//                 let node = queue.shift();
//                 for (let neighbor of graph[node]){
//                     if (colors[neighbor] === -1){
//                         colors[neighbor] = 1 - colors[node];
//                         queue.push(neighbor);
//                     } else if (colors[neighbor] === colors[node]){
//                         return false;
//                     }
//                 }
//             }
//         }
//     }
//     return true;

// };

// DFS
var isBipartite = function(graph) {
    let colors = new Array(graph.length).fill(-1);
    for(let i = 0; i <graph.length ; i++){
        if(colors[i] === -1 && !dfs(graph, colors, i, 0)) return false
    }
    return true;
};

var dfs = (graph, colors, node, c) => {
    colors[node] = c;
    for (let neighbor of graph[node]){
        if (colors[neighbor] === -1 && !dfs(graph, colors, neighbor, 1 - c)){
            return false
        } else if (colors[neighbor] === colors[node]){
            return false;
        }
    }
    return true
}