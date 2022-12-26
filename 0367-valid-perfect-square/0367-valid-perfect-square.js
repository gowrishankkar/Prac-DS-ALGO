/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     if (num == 0 || num == 1)
            return num;
        let start = 1;
        let end = num;
        let ans;
        while (start <= end)
        {
            let mid = Math.floor((start + end) / 2);
            if (mid * mid == num)
                return true;
            if (mid * mid < num) {
                start = mid + 1;
                // ans = mid;
            } else
                end = mid-1;    
        }
        return false;
};