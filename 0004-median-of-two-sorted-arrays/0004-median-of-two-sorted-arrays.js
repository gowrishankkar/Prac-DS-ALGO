/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;
    if(n1 > n2) return findMedianSortedArrays(nums2, nums1);
    let left = Math.floor((n1 + n2 + 1) / 2); 
    let n = n1 + n2;
    let l = 0, h = n1;
    while(l <= h){
        let m1 = Math.floor((l + h) / 2)
        let m2 = left - m1;
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if(m1 < n1) r1 = nums1[m1];
        if(m2 < n2) r2 = nums2[m2];
        if(m1 - 1 >= 0) l1 = nums1[m1 - 1];
        if(m2 - 1 >= 0) l2 = nums2[m2 - 1];
        if(l1 <= r2 && l2 <= r1){
            if(n%2 == 1) return Math.max(l1, l2)
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }
        
        if(l1 > r2) h = m1 - 1;
        else l = m1 + 1
    }
    return 0;
};

