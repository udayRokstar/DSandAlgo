// function linearSearch(arr, target) {
//     for(let i=0; i<= arr.length; i++) {
//         if(arr[i] === target) return i
//     }
//     return -1;
// }


// console.log(linearSearch([-5,4,3,8,9,6], 3))
// console.log(linearSearch([-5,4,3,8,9,6], 7))
// console.log(linearSearch([-5,4,3,8,9,6], 6))

// Time complexity is BigO = O(n)


function binarySearch(arr, target) {
    // arr = arr.sort();
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex) / 2);

        if(target == arr[middleIndex]) return middleIndex;
        if(target < arr[middleIndex]){
            rightIndex = middleIndex-1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}


console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], 20))

// console.log(binarySearch([-5,4,3,8,9,6], 3))
// console.log(binarySearch([-5,4,3,8,9,6], 7))
// console.log(binarySearch([-5,4,3,8,9,6], 6))

//BigO = O(logn)