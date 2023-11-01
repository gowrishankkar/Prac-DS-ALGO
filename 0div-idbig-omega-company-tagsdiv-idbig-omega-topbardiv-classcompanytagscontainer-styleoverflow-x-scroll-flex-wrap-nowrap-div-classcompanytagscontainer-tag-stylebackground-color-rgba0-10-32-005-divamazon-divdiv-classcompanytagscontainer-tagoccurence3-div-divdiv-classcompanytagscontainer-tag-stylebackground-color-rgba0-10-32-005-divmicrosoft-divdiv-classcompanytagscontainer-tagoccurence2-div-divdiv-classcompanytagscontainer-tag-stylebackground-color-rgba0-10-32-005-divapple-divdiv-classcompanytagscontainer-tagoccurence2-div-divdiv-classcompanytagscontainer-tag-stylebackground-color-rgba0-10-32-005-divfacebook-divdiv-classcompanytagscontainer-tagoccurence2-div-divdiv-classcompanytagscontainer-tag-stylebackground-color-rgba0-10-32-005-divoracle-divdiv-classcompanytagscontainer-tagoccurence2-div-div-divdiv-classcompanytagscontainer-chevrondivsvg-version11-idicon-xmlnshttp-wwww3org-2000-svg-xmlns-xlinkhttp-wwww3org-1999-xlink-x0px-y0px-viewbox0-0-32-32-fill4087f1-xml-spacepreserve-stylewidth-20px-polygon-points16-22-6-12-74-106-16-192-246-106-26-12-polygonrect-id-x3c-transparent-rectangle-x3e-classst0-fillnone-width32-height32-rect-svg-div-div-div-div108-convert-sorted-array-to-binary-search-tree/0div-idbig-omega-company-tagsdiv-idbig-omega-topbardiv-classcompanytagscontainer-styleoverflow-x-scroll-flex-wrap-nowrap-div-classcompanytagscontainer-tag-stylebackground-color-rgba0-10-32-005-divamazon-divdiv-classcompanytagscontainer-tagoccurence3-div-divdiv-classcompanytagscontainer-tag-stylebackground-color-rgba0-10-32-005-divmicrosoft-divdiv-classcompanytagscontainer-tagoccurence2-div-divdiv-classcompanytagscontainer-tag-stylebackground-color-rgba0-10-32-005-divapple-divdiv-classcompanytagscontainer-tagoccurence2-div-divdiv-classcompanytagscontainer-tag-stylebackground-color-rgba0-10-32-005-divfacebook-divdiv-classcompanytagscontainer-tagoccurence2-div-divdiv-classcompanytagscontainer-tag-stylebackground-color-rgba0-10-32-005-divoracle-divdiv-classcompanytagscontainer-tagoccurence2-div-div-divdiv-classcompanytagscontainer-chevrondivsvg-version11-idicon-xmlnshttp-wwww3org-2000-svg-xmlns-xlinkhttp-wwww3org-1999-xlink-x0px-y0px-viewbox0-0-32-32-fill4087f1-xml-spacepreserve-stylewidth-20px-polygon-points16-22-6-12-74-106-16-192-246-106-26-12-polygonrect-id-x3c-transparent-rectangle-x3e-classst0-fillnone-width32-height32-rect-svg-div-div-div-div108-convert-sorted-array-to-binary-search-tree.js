/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    
    function buildBST(nums, low, high){
        if(low<0 || high >nums.length-1) return null;
        if(nums.length == 0 || low > high) return null;
        
        let mid = low + Math.floor((high - low) /2);
        let root = new TreeNode(nums[mid]);
        root.left = buildBST(nums, low, mid-1);
        root.right = buildBST(nums, mid+1, high);
        return root;
    }
    
    return buildBST(nums, 0, nums.length-1)
};