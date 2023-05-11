const diagonalSum = mat => {
    let length = mat.length - 1
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] + mat[i][length - i]
    }
    if(length % 2 === 0) sum -= mat[length / 2][length / 2]
}

// or

function diagonalSum(mat) {
    const n = mat.length;
    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < n; i++) {
        primarySum += mat[i][i];

        if (i !== n - i - 1) {
            secondarySum += mat[i][n - i - 1];
        }

    }

    return primarySum + secondarySum;
}

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))
console.log(diagonalSum([[5]]))


