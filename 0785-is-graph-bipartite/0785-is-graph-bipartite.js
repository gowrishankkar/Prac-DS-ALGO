/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let color = new Array(graph.length).fill(-1)
    const check =(graph, color, start) =>{
        let q = [];
        q.push(start)
        color[start] = 0;
       
        while(q.length){
            let node = q.pop();
            for(let i of graph[node]){
                if(color[i] == -1){
                    
                color[i] = !color[node];
                q.push(i)
                    console.log('color', color)
                }
                else if(color[i] === color[node]) {
                    console.log('color', color)
                    return false}
            }
        }
        return true
    }
    
    for(let i = 0; i <graph.length ; i++){
        if(color[i] === -1 && !check(graph, color, i)) return false
    }
    return true

    
};