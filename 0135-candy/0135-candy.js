var candy = function (ratings) {
	const candies = Array(ratings.length).fill(0),
		getNext = i => {
			candies[i] = ratings[i] > ratings[i + 1] ? getNext(i + 1) + 1 : 1;
			return candies[i];
		};
	let prev, next;

	for (let i = 0; i < ratings.length; i += next) {
		prev = ratings[i] > ratings[i - 1] ? (prev = candies[i - 1] + 1) : 1;
		next = getNext(i);
		candies[i] = Math.max(next, prev);
	}

	return candies.reduce((a, b) => a + b, 0);
};