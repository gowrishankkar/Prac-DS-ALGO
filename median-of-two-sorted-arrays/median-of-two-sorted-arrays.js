/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     if(nums1.length < nums2.length){
        let tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    
    let lenA = nums1.length,
        lenB = nums2.length,
        len = lenA + lenB,
        start = 0,
        end = lenA - 1;
    
    if(lenB != 0){        
        
        if(nums1[start] > nums2[lenB - 1]){
            end = -1;
        }else if(nums1[end] < nums2[0]){
            start = end;
        }
        
        let index = start;
        for(let i = 0; i < nums2.length; i++){
            index = binarySearch(nums1, nums2[i], index, end);
            
            nums1.splice(index, 0, nums2[i]);
            end++;
        }
    }
        
    let half = len >> 1;
    
    return len % 2 == 1 ?
        //odd
        nums1[half]:
        //even
        (nums1[half] + nums1[half - 1]) / 2;
    
    function binarySearch(arr, target, start, end){
        while(start <= end){
            let mid = (start + end) >> 1;
            
            if(arr[mid] == target){
                return mid;
            }
            
            if(target > arr[mid]){
                start = mid + 1;
            }
            
            if(target < arr[mid]){
                end = mid - 1;                
            }
        }
        
        return start;
    };   
};