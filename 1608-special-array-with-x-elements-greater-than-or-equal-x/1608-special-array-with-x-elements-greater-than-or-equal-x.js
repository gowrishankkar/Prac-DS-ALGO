const specialArray = nums => {
    for (let i = 1; i <= Math.max(...nums); i++) {
        let k = 0
        for (let x of nums)
            if(x>=i) k++
        if(k===i) return i
    }
    return -1
}