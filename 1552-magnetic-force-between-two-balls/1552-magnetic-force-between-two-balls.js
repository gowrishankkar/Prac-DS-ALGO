/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
	position.sort((a, b) => a - b);
	const canPlaceWithMinDif = dif => {
		let pos = position[0], magnets = m;
		for (let i = 0; i < position.length; i++)
			if (pos <= position[i]) {
				pos = position[i] + dif;
				magnets--;
				if (!magnets) return true;
			}
		return false;
	};
	let low = 1, mid, high = 10 ** 9;
	while (low < high) {
		mid = (low + high) >>> 1;
		canPlaceWithMinDif(mid) ? (low = mid + 1) : (high = mid);
	}
	return canPlaceWithMinDif(low) ? low : low - 1;
};