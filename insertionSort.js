function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if( arr[i] < pivot ) {
            // left.push(arr[i]); // Assending order
            right.push(arr[i]);  // Decending order
        } else {
            // right.push(arr[i])
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));
