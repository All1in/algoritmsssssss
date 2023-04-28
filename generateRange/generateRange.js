function generateRange(min, max, step) {
    let newArr = []
    for (let i = min; i <= max; i += step) newArr.push(i)
    return newArr
}

console.log(generateRange(2, 10, 2))
