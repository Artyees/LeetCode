function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    console.log(arr.slice(mid))
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const mergedArray = mergeSort([3, 5, 8, 5, 99, 1, 77]) // [1, 3, 5, 5, 8, 99]

console.log(mergedArray)