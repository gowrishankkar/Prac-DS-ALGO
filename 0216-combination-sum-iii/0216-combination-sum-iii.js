var combinationSum3 = function (k, n) {
	const comb = [],
		res = [],
		dfs = (num, curSum) => {
			if (comb.length === k) {
				curSum === n && res.push([...comb]);
				return;
			}
			if (curSum >= n) return;
			for (let i = num; i < 10; i++) {
				comb.push(i);
				dfs(i + 1, curSum + i);
				comb.pop();
			}
		};
	dfs(1, 0);
	return res;
};