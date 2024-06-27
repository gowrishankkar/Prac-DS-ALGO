/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter=edges=>{
   for(let x of edges){
       if(!x.includes(edges[0][0]))return edges[0][1]
   }
    return edges[0][0]
}