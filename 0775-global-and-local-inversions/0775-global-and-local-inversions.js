var isIdealPermutation = function(A) {
    for (let i = 0; i < A.length; i++)
        if (i - A[i] > 1 || i - A[i] < -1) return false
    return true
};