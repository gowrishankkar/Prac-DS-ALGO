/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const list = generateAdjList(isConnected) 
    let n = isConnected.length;
    let vis = new Array(n).fill(false);
    let count = 0;
    for(let i = 0; i < n; i++){
        // console.log('vis', vis)
        if(!vis[i]){
            count++;
            dfs(i, list, vis);
        }
    }
    
    return count;
};

var generateAdjList = (m) => {
    let v =  new Array(m.length)
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            if(m[i][j] != 0 ){
                if (!v[i]) {
                    v[i] = [];
                }
                v[i].push(j)
            }
        }
    }
    return v;
}

var dfs = (node, aList, vis) => {
    vis[node] = 1;
    // for(let i = 0; i < aList.length ; i++){
    //     if(!vis[aList[i]]){
    //         dfs(aList[i], aList, vis);
    //     }
    // }
    console.log('aList[node]', aList[node])
    aList[node].forEach((ele) =>{
        console.log('ele', ele)
        if(!vis[ele]){
            dfs(ele, aList, vis);
        }
    })
}