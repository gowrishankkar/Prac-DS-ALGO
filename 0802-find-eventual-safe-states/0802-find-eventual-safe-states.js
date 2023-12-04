/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let vis = new Array(graph.length).fill(0);
    let pv = new Array(graph.length).fill(0);
    let check = new Array(graph.length).fill(0);
    for(let i = 0; i <graph.length ; i++){
        if(vis[i] === 0) dfs(i, vis, pv, check, graph)
    }
    let res = []
    console.log('check', check)
    for(let i = 0; i <check.length ; i++){
        if(check[i]) res.push(i)
    }
    return res;
};


var dfs = (node, vis, pv, check, graph) => {
    vis[node] = 1;
    pv[node] = 1;
    for (let neighbor of graph[node]){
        if (vis[neighbor] === 0 && dfs(neighbor, vis, pv, check, graph)){
            return true
        } else if (pv[neighbor]){
            return true;
        }
    }
    check[node] = 1;
    pv[node] = 0;
    return false
}