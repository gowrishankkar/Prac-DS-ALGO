/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
  if (!matrix.length) return [];
  
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  
  //create two adjacency matrices for results of atlantic and pacific dfs
  //(if a node can reach an ocean, it goes in that matrix)
  const pacific = new Array(numRows).fill().map(() => Array(numCols).fill(false))
  const atlantic = new Array(numRows).fill().map(() => Array(numCols).fill(false))
  
  /*KEY POINT: dfs will be run from the ocean inwards, not vice versa
  (from the ocean-adjacent nodes to the highest point(s))*/
  
  //dfs works by marking successfully visited squares in matrix as true
  //remember we're going from ocean inland
  const dfs = (r, c, current, ocean) =>{ //r=row c=column ocean=pacific/atlantic current=the node we're checking
    //base case: return if out of bounds
    if (r < 0 || c < 0 || r >= numRows || c >= numCols) return;
    //base case: return if our current node is larger than the surrounding nodes, because we are only marking node as true if it is larger than the next...remember we are working upwards to the highest point. This is a bit confusing, but look at the inputs: when we run this recursively, below, if N, S, E, or W are less than the current node, we'll return, because they need to be HIGHER to work upwards.
    if (matrix[r][c] < current) return;
    //base case: return if this node already marked (in ocean), thus already visited
    if (ocean[r][c]) return;
    //if we're here it means the conditions have been successfully met and thus we can reach the ocean, so we mark this node true (water can flow here) in that ocean
    ocean[r][c] = true;
    //call dfs recursively on each of the surrounding cells (ie N,S,E,W)
    dfs(r+1, c, matrix[r][c], ocean);
    dfs(r-1, c, matrix[r][c], ocean);
    dfs(r, c+1, matrix[r][c], ocean);
    dfs(r, c-1, matrix[r][c], ocean);
  };
  
  /*the pacfic touches the top and left sides of the matrix (N & E)
  and the atlantic touches the right and bottom sides (W & S)
  thus...*/
  //we run DFS for the top and bottom rows
  for (let col=0; col < numCols; col++){
   dfs(0, col, matrix[0][col], pacific);
   dfs(numRows-1, col, matrix[numRows-1][col], atlantic);
  }
  //and for the first and last columns
  for (let row = 0; row < numRows; row++){
    dfs(row, 0, matrix[row][0], pacific)
    dfs(row, numCols-1, matrix[row][numCols-1], atlantic)
  }

  //add to result if exists in both pacific and atlantic
  let result = [];
  for (let i=0; i < numRows; i++){
    for (let j=0; j < numCols; j++){
      if (atlantic[i][j] && pacific[i][j]){
        result.push([i, j]);
      }
    }
  }
  return result;
};