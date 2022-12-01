// var isIdealPermutation = function(A) {
//     // for (let i = 0; i < A.length; i++)
//     //     if (i - A[i] > 1 || i - A[i] < -1) return false
//     // return true
    
//      const n = A.length;
//     let localInversions = 0;
//     let globalInversions = 0;
//     for(let i = 0;i<n;i++){
//         if(0 <= i && i< n-1 && A[i] > A[i+1]){
//             localInversions++
//         }
//         for(let j = i;j<n;j++){
//             if(0 <= i && i < j && j < n && A[i] > A[j]){
//                 globalInversions++
//             }
//         }
//     }
    
    
    
//     return localInversions === globalInversions
// };

const mergeSort = (arr, left, mid, right) => {
	let res = [], l = left, r = mid;

	while (l < mid && r < right) {
		if (arr[l] <= arr[r]) { res.push(arr[l++]); }
		else { res.push(arr[r++]); }
	}

	while (l < mid) { res.push(arr[l++]); }
	while (r < right) { res.push(arr[r++]); }
	for (let i = left; i < right; i++) { arr[i] = res[i - left]; }
}

const cntInversions = (arr, left, mid) => {
    let i = left, j = mid - 1, cnt = 0;

	while (i < mid) {
		while (arr[j + 1] <= arr[i]) { j++; }
		if (arr[i] > arr[j]) { cnt += (j - mid) + 1; }
		i++;
	}
    return cnt;
}

const globalInversions = (arr, left, right) => {
	if (right === left + 1) { return 0; }

	let mid = Math.floor((left + right) / 2);

	let lcnt = globalInversions(arr, left, mid);
	let rcnt = globalInversions(arr, mid, right);
	
    let cnt = cntInversions(arr, left, mid);
    mergeSort(arr, left, mid, right);

	return lcnt + rcnt + cnt;
}

const localInversions = A => {
    let cnt = 0;
    for (let i = 0; i < A.length - 1; i++) { if (A[i] > A[i + 1]) { cnt++; } }
    return cnt;
}

const isIdealPermutation = A => localInversions(A) === globalInversions(A, 0, A.length);