/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {

  const safe = {};
  const visited = {};
  const ans = [];

  const dfs = (src) => {

      if (safe[src]) {
          return true;
      }
      
      if (visited[src]) {
          return false;
      }

      visited[src] = true;

      for (let neigh of graph[src]) {

          if (dfs(neigh)) {
              safe[neigh] = true;
          } else {
              return false;
          }
      }

      return true;
  }

  for (let i = 0; i < graph.length; i++) {

      if (dfs(i)) {
          ans.push(i);
          safe[i] = true;
      }
  }

  return ans;
};