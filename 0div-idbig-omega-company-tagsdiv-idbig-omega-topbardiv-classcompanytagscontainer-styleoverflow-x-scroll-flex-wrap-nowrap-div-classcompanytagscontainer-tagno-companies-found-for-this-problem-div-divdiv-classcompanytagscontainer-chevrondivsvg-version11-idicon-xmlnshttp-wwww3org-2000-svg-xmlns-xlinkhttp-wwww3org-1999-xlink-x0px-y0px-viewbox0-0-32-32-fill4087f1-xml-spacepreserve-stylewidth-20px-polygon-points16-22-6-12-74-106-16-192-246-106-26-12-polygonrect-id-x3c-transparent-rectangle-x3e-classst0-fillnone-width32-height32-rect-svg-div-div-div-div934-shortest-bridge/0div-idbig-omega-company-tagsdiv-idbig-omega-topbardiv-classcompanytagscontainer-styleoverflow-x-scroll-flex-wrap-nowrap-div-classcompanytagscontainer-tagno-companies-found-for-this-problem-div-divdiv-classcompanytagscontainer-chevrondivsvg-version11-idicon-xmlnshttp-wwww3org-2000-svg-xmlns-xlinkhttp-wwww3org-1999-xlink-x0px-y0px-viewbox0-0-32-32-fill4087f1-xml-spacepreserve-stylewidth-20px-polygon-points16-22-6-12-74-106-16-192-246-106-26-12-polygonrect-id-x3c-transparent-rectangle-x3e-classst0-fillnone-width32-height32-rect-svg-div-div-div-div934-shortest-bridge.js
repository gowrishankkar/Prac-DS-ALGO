/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(arr) {
    let dirs = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    
    const check = (i, j) => {
        return i >= 0 && j >= 0 && i < arr.length && j < arr[0].length && arr[i][j] != -1;
    };

    const propagate = (nums, i, j, dq) => {
        if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length || arr[i][j] != 1) return;
        nums[i][j] = -1;
        dq.push([i, j]);
        dirs.forEach((d) => {
            propagate(nums, i + d[0], j + d[1], dq);
        });
    };
    
    const shortestBridgeHelper = () => {
        const dq = [];
        let[i, j, res, found] = [0,0,0,false];

        // try to find the first 1
        for(i = 0;i < arr.length; i++) {
            for(j = 0; j < arr[0].length; j++) {
                if (arr[i][j] == 1) {
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        
        // found first islands coordinates, build this island
        propagate(arr, i, j, dq);
        
        // no need to build another island, just bfs from first island to first 1 from other island
        while (dq.length) {
            for (let size = dq.length; size > 0; --size) {
                const cur = dq.shift();
                if (arr[cur[0]][cur[1]] == 1) return res;
                for(let d of dirs) {
                    const r1 = cur[0] + d[0];
                    const c1 = cur[1] + d[1];
                    if (check(r1, c1)) {
                        if (arr[r1][c1] == 1) return res;
                        dq.push([r1, c1]);
                        arr[r1][c1] = -1;
                    }
                };
            }
            res++;
        }
	    return -1;
    };
    return shortestBridgeHelper();
    
	};