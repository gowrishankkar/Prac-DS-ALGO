/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let n = graph.length;
    let vis = new Array(n);
    vis.fill(-1);
    let pathVis = [...vis];
    let ans = [];

    function dfs(node){
         vis[node] = 1;
         pathVis[node] = 1;
         let adjList = graph[node];
         let cycle = false;
         for(let i=0; i<adjList.length; i++){
             let adjNode = adjList[i];
             if(vis[adjNode] == -1){
                 if(dfs(adjNode) == true){
                     cycle = true
                 }
                 else{
                     cycle = cycle | false;
                 }
             }
             else if(pathVis[adjNode] == 1){
                cycle = true;
             }
         }
         if(cycle){
             return true;
         }
         pathVis[node] = -1;
         ans.push(node);
         return false;
    }

    for(let i=0; i<n; i++){
        if(vis[i] == -1){
            dfs(i);
        }
        
    }

    return ans.sort((a,b)=>a-b);
};