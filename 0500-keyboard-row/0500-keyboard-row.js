/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var keyMap = [
        {
            q: 'q', w: 'w', e: 'e', r: 'r', t: 't', y: 'y',
            u: 'u', i: 'i', o: 'o', p: 'p'
        
        },
        {
            a: 'a', s: 's', d: 'd', f: 'f', g: 'g', h: 'h',
            j: 'j', k: 'k', l:'l'
        },
        {
            z: 'z', x: 'x', c: 'c', v: 'v', b: 'b', n: 'n', m: 'm'
        }
    ];
    
    var row = '';
    var output = [];
    
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            var char = words[i][j].toLowerCase();
            
            if (keyMap[0][char]) {
                row += '0';
            }
            if (keyMap[1][char]) {
                row += '1';
            }
                
            if (keyMap[2][char]) {
                row += '2';
            }
        }
        
        if (checkRow(row.split(''))) {
            output.push(words[i]);
        }
        row = '';
    }
    
    return output;
};

const checkRow = arr => arr.every( v => v === arr[0] );