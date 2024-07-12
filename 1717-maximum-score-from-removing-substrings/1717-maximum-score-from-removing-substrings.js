var maximumGain = function (S, X, Y) {
    let len = S.length, res = 0, a = "a", b = "b";
    if (Y > X) [a, b, X, Y] = [b, a, Y, X];
    let aStore = 0, bStore = 0;
    for (let i = 0, c = S[i]; i <= len; c = S[++i])
        if (c === a) aStore++;
        else if (c === b)
            if (aStore) res += X, aStore--;
            else bStore++;
        else res += Y * Math.min(aStore, bStore), aStore = bStore = 0;
    return res;
};