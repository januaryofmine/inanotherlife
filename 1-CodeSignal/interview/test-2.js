function max(arr) {
    let maxEnd = 0;
    const rs =  arr.reduce((acc, curr) => {
        maxEnd = maxEnd + curr;
        if(acc < maxEnd) {
            acc = maxEnd;
        }
        if(maxEnd < 0) {
            maxEnd = 0;
        }
        return acc;
    }, Number.MIN_VALUE)
    return rs == Number.MIN_VALUE ? Math.max(...arr) : rs;
}
console.log(max([-1, 3, 4, -2, 5, -7]));