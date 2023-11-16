/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    
    let graph = new Map();
    
    for(let road of roads){
        let a = road[0];
        let b = road[1];
        let distance = road[2];
      let arr = graph.get(a) || [];
      arr.push([b,distance]);
      graph.set(a,arr);

      arr = graph.get(b) || [];
      arr.push([a,distance]);
      graph.set(b,arr);

    }

    //console.log(graph);   
    let res = 10001
    let q = [];
    q.push(1);
    let visited = new Set();
    visited.add(1);

    while(q.length > 0){
        let city = q.shift();
        let arr = graph.get(city);
        for(let[city2,distance] of arr){
            
            res = Math.min(res,distance);
            if(visited.has(city2)) continue;

            visited.add(city2);
            q.push(city2);
        }
    }
    return res;
};