var merge = function (arr, low, mid, high) {
    let temp = [], l = low, r = mid + 1;
    while (l <= mid && r <= high) {
        if (arr[l] <= arr[r]) {
            temp.push(arr[l]);
            l++;
        } else {
            temp.push(arr[r]);
            r++;
        }
    }
    while (l <= mid) {
        temp.push(arr[l]);
        l++;
    }
    while (r <= high) {
        temp.push(arr[r]);
        r++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
};

const countPairs = (arr, low, mid, high) => {
    let r = mid + 1, count = 0;
    for (let i = low; i <= mid; i++) {
        while (r <= high && arr[i] > 2 * arr[r]) r++;
        count += r - (mid + 1);
    }
    return count;
}

const mergeSort = (arr, low, high) => {
    let count = 0;
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        count += mergeSort(arr, low, mid);
        count += mergeSort(arr, mid + 1, high);
        count += countPairs(arr, low, mid, high);
        merge(arr, low, mid, high);
    }
    return count;
}

var reversePairs = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
}