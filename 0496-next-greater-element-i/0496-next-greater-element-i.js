/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
        let nums1Idx = new Map(); {
        let idx = 0;
        for(const n of nums1)
            nums1Idx.set(n, idx++);
    }
    let res = [];
    for(let i = 0; i < nums1.length; i++)
        res.push(-1);
    
    let stack = [];
    for(let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
        
        // while stack is not empty and current is greater than the top of the stack
        while(stack.length > 0 && cur > stack[stack.length - 1]) {
            let val = stack.pop();
            let idx = nums1Idx.get(val);
            res[idx] = cur;
        }
        
        if(nums1Idx.has(cur))
            stack.push(cur);
    }
    
    return res;
};

var nextGreaterElement = function(nums1, nums2) {
    let r = [];
    let s = [];
    let n =  nums2.length;
    let arr = nums2
    for(let i = n - 1; i >= 0; i--) {
        if(!s.length) r.push(-1);
        else if(s.length && s[s.length - 1] > arr[i]) r.push(s[s.length - 1])
        else if(s.length && s[s.length - 1] <= arr[i]){
            while(s.length && s[s.length - 1] <= arr[i]) s.pop();
            if(!s.length) r.push(-1);
            else r.push(s[s.length - 1]);
        }
        s.push(arr[i])
    }
    r.reverse();
    let ans = [];
    return nums1.map((ele) => { return r[nums2.indexOf(ele)]})

}