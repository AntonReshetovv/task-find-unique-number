const arrA = [1, 1, 1, 2, 1, 1]
const arrB = [0, 0, 0.55, 0, 0]

function findUniq(arr) {
    const arraySort = arr.sort((a, b) => a - b)
    if (arraySort[0] === arraySort[1]) {
        return arraySort[arraySort.length - 1]
    }
    return arraySort[0]
}

findUniq(arrA)
findUniq(arrB)