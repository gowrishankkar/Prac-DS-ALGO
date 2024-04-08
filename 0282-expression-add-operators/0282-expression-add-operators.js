/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(nums, target) {
    if(!nums || !nums.length) {
        return [];
    }
    
    const ans = [];
    const recurse = (index, prev, curr, val, ops) => {
        if(index === nums.length) {
            if(val === target && curr === 0) {
                ans.push(ops.slice(1).join(''));
            }
            return;
        }
        
        curr = curr * 10 + parseInt(nums[index]);
        if(curr > 0) {
            recurse(index+1, prev, curr, val, ops);
        }
        
        ops.push('+');
        ops.push(curr.toString());
        recurse(index+1, curr, 0, val+curr, ops);
        ops.pop();
        ops.pop();
        
        if(ops.length) {
            ops.push('-');
            ops.push(curr.toString());
            recurse(index+1, -curr, 0, val-curr, ops);
            ops.pop();
            ops.pop();

            ops.push('*');
            ops.push(curr.toString());
            recurse(index+1, (curr * prev), 0, val - prev + (curr * prev), ops);
            ops.pop();
            ops.pop();
            
        }
    };
    
    recurse(0,0,0,0, []);
    return ans;
};