/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = (s) => {
    const isBaseCase = !s.length || s[0] === '0'
    if (isBaseCase) return 0;

    const tabu = getTabu(s);

    decode(s, tabu);

    return tabu[s.length];
}

const getTabu = (s) => {
    const tabu = new Array(s.length + 1).fill(0);

    tabu[0] = 1;
    tabu[1] = (s[1] === '0')
        ? 0
        : 1;

    return tabu;
}

var decode = (s, tabu) => {
    for (let curr = 2; curr < tabu.length; curr++) {
        const [ prev, prevPrev ] = [ (curr - 1), (curr - 2) ];
        const isEqual = s[prev] === '0';
        if (!isEqual) tabu[curr] += tabu[prev];

        if (isTwoDigit(s, curr)) tabu[curr] += tabu[prevPrev];
    }
}

var isTwoDigit = (s, index) => {
    const twoDigit = Number(s.slice((index - 2), index));

    return 10 <= twoDigit && twoDigit <= 26;
}
