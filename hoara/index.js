const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32]
let count = 0

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]
    let less = []
    let more = []

    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === middleIndex) continue
        if(array[i] < middle) {
            less.push(array[i])
        } else {
            more.push(array[i])
        }
    }
    return [...quickSort(less), middle, ...quickSort(more)]
}

console.log(quickSort(arr))
console.log('count = ', count)