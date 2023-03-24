/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures, hottest = 0) {
    const days = new Array(temperatures.length).fill(0);

    for (let day = (temperatures.length - 1); (0 <= day); day--) {/* Time O(N + N) */
        const temperature = temperatures[day];

        const isHotter = hottest <= temperature
        if (isHotter) {
            hottest = temperature;
            continue;                                             /* Time O(N + N) */
        }

        search(temperatures, day, temperature, days);             /* Time O(N + N) | Ignore Space O(N) */
    }

    return days;
}

const search = (temperatures, day, temperature, days, dayCount = 1) => {
    const isHotter = () => temperatures[day + dayCount] <= temperature;
    while (isHotter()) dayCount += days[day + dayCount];          /* Time O(N + N) */

    days[day] = dayCount;                                         /* Ignore Space O(N) */
}