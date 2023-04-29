function maxSumBetweenTwoNegatives(a) {
    let maxSum = -1;
    let start = -1;
    let end = -1;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            if (start !== -1 && end !== -1) {
                let sum = a.slice(start + 1, end).reduce((acc, cur) => acc + cur, 0);
                if (sum > maxSum) {
                    maxSum = sum;
                }
            }
            start = end;
            end = i;
        }
    }

    if (start !== -1 && end !== -1) {
        let sum = a.slice(start + 1, end).reduce((acc, cur) => acc + cur, 0);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}


console.log(maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]))
console.log(maxSumBetweenTwoNegatives([5,-1,-2]))
console.log(maxSumBetweenTwoNegatives([1,-2]))
