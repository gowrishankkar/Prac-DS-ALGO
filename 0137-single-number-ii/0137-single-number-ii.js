/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
		let sum, ones;
		for(let i = 1; i <= 32; i++){
			sum = 0;
			ones = (1 << i);
			for(let k = 0; k < nums.length; k++){
				if(nums[k] & ones) sum++;
			}

			if((sum % 3 ) != 0) res= res | ones
		}

		return res;
};