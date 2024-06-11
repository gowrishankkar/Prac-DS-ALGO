/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function(arr1, arr2) {
//     let count = Array(1001)
//     for (let a of arr2)
//         count[a] = 0
//     let not_arr2 = []
//     for (let a of arr1) {
//         if (count[a] != undefined)
//             count[a]++
//         else
//             not_arr2.push(a)
//     }
//     let in_arr2 = []
//     for (let a of arr2) {
//         if (count[a] != undefined) {
//             for (let i = 0; i < count[a]; i++) {
//                 in_arr2.push(a)
//             }
//         }
//     }
//     return in_arr2.concat(not_arr2.sort((a,b)=>a-b))
// };

const relativeSortArray = (arr1, arr2) => {
  let sortedList = [];
  for (const n of arr2) {
    let index = -1;
    index = arr1.indexOf(n, index + 1);
    while (index !== -1) {
      arr1[index] = undefined;
      sortedList.push(n);
      index = arr1.indexOf(n, index + 1);
    }
  }

  return [
    ...sortedList,
    ...arr1.filter(item => item !== undefined).sort((a, b) => a - b)
  ];
};