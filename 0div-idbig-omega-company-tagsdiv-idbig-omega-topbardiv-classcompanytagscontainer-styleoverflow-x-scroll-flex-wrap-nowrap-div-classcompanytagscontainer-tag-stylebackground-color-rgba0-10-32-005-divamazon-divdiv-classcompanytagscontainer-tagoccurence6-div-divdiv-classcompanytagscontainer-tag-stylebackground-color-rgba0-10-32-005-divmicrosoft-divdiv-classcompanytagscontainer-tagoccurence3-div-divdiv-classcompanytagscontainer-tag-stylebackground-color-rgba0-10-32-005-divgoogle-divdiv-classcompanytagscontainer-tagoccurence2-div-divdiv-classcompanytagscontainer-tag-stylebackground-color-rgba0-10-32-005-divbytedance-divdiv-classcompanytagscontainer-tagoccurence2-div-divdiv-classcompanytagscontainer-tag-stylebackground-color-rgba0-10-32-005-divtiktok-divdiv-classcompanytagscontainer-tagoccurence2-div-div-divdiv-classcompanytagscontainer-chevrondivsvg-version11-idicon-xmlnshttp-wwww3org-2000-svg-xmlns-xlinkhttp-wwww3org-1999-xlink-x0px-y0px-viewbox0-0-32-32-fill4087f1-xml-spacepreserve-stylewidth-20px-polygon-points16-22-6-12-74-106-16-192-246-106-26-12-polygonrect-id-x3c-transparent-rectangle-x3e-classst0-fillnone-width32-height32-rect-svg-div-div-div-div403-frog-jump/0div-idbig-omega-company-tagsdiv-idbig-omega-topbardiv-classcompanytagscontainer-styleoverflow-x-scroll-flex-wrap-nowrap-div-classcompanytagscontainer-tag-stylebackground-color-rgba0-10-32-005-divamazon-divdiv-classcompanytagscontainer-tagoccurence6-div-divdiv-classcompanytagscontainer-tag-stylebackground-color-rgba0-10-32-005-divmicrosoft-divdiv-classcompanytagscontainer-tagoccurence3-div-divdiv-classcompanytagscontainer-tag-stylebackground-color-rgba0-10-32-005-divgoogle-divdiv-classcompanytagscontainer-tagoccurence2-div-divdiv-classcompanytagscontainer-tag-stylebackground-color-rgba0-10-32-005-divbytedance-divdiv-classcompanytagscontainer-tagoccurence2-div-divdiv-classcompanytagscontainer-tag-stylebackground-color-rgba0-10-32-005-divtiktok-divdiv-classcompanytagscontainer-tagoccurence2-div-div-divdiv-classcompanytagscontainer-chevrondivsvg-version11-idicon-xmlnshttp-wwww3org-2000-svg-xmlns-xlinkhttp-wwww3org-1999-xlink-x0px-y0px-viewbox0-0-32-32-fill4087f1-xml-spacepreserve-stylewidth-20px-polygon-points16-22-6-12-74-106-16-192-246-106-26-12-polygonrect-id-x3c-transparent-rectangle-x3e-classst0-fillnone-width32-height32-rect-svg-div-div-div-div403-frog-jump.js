/**
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = stones => {
    const dp = Array.from({ length: stones.length }, _ => [] )
    const stoneToIndex = {}
    console.log('dp', dp)
    const end = stones[ stones.length - 1 ]
    const jump = ( s, k ) => {
        if ( s === end ) return true
        
        let i = stoneToIndex[ s ]
        if ( k < 1 || end < s || isNaN( i ) ) return false

        if ( 'undefined' === typeof dp[ i ][ k ] ) {
            dp[ i ][ k ] = jump( s + k + 1, k + 1 ) || jump( s + k, k ) || jump( s + k - 1, k - 1 )
        }

        return dp[ i ][ k ]
    }
    
    stones.forEach( ( s, i ) => stoneToIndex[ s ] = i )
    
    return jump( 1, 1 )
}


// const canCross = stones => {
//      const dp = Array.from({ length: stones.length }, _ => [] )
//     const stoneToIndex = {}
//     console.log('dp', dp, new Array(stones.length).fill([]))
//     const end = stones[ stones.length - 1 ]
//     const jump = ( s, k , i ) => {
//         if ( s === end ) return true
//         // if(i < 0 || i > stones.length) return false;
//         // let i = stoneToIndex[ s ]
//         if ( k < 1 || end < s  ) return false

//         if ( 'undefined' === typeof dp[ i ][ k ] ) {
//             dp[ i ][ k ] = jump( s + k + 1, k + 1, i + 1 ) || jump( s + k, k , i) || jump( s + k - 1, k - 1 , i - 1)
//         }

//         return dp[ i ][ k ]
//     }
    
//     // stones.forEach( ( s, i ) => stoneToIndex[ s ] = i )
//     console.log('stoneToIndex', stoneToIndex)
//     return jump( 1, 1 , 1)
// }