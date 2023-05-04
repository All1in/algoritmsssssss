function sumFactorial(lst) {
    let sum = 0;
    for (let i = 0; i < lst.length; i++) {
        let factorial = 1;
        for (let j = 2; j <= lst[i]; j++) {
            factorial *= j;
        }
        sum += factorial;
    }
    return sum;
}


console.log(sumFactorial([4,6]))
console.log(sumFactorial([5,4,1]))
