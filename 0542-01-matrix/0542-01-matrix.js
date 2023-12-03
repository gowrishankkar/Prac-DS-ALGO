/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// var updateMatrix = function(matrix) {
//    	const directions = [
// 		[1, 0],
// 		[-1, 0],
// 		[0, 1],
// 		[0, -1],
// 	];
// 	const N = matrix.length;
// 	const M = matrix[0].length;
// 	const output = new Array(N).fill().map(() => Array(M).fill(0));
// 	const queue = [];

//   for (let r = 0; r < matrix.length; r++) {
// 		for (let c = 0; c < matrix[0].length; c++) {
// 			if (matrix[r][c] === 0) queue.push([r, c]);
// 			else output[r][c] = -1;
// 		}
// 	}

// 	while (queue.length) {
// 		const len = queue.length;

// 		for (let i = 0; i < len; i++) {
// 			const [row, col] = queue.shift();

// 			for (const [dx, dy] of directions) {
// 				const x = row + dx;
// 				const y = col + dy;

// 				if (x < 0 || x >= matrix.length) continue;
// 				if (y < 0 || y >= matrix[0].length) continue;
// 				if (matrix[x][y] === 0) continue;

// 				if (output[x][y] !== -1) continue;

// 				output[x][y] = output[row][col] + 1;
// 				queue.push([x, y]);
// 			}
// 		}
// 	}

// 	return output;
// };


var updateMatrix = function(matrix) {
   	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const n = matrix.length;
	const m = matrix[0].length;
	const vis = new Array(n).fill([]).map(() => Array(m).fill(0));
    const dist = new Array(n).fill([]).map(() => Array(m).fill(0));
	const q = [];

    for (let r = 0; r < n; r++) {
		for (let c = 0; c < m; c++) {
			if (matrix[r][c] === 0){
                q.push([r, c, 0]);
                vis[r][c] = 1;
            }
		}
	}

	while (q.length) {
        let [r, c, d] = q.shift();
        dist[r][c] = d;
        for (const [dx, dy] of directions) {
            const nr = r + dx;
            const nc = c + dy;
            if((0 <= nr) && (nr < n) && (0 <= nc) && (nc < m) && vis[nr][nc] == 0){
                vis[nr][nc] = 1;
                q.push([nr, nc, d + 1])
            }
        }

	}
	return dist;
};