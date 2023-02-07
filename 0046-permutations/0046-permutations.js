/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    let A = nums
		const gen = (curr, map, idx) => {
			if (idx === A.length) {
				// console.log('curr', curr)
				ans.push(curr.slice())
				// console.log('ans', ans)
				return;
			}
			for (let i = 0; i < A.length; i++) {
				if (!(map.has(A[i]))) {
					curr[idx] = A[i];
					map.add(A[i])
					gen(curr, map, idx + 1)
					map.delete(A[i])

				}
			}
		}

		let curr = [];

		let index = 0
		let map = new Set()
		gen(curr, map, index)
		return ans
};