/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
//       let chars = {"A": 1,"B": 2,"C": 3,"D": 4,"E": 5,"F": 6,"G": 7,"H": 8,"I": 9,"J": 10,"K": 11,"L": 12,"M": 13,"N": 14,"O": 15,"P": 16,"Q": 17,"R": 18,"S": 19,"T": 20,"U": 21,"V": 22,"W": 23,"X": 24,"Y": 25,"Z": 26}

//         if (columnTitle.length === 1) return chars[columnTitle];

//         let tot = chars[columnTitle[0]]
//         for (let i = 1; i < columnTitle.length; i++) {
//             tot = (tot * 26) + chars[columnTitle[i]]
//         }

//         return tot
     let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle[columnTitle.length - 1 - i];
      console.log('char', char)
    sum += (char.charCodeAt() - 64) * 26 ** i;
  }
  return sum;
};