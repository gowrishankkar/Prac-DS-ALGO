/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let x = arr[i] / arr[j]
            let y = "" + arr[i] + "," + arr[j]
            map.set(x,y)
        }
    }
    let arr1 = []
    for(let [keys,values] of map){
        arr1.push(keys)
    }
    arr1.sort((a,b)=>a-b)
    let num = map.get(arr1[k-1])
    return num.split(',')
};