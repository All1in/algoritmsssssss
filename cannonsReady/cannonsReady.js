const cannonsReady = (gunners) => {
    let countNay = 0
    const valuesOfInitialObject = Object.values(gunners)
    for (let i = 0; i < valuesOfInitialObject.length; i++) {
        if(valuesOfInitialObject[i] === 'nay') countNay += 1
    }
    return countNay > 0 ? 'Shiver me timbers!' : 'Fire!'
}

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

console.log(cannonsReady(a))
console.log(cannonsReady(b))


