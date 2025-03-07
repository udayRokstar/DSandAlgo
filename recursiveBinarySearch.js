function recursiveBinarySearch(arr, target){
    return binarySearch(arr, target, 0, arr.length-1);
}

function binarySearch(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target === arr[middleIndex]) return middleIndex;
    if(target < arr[middleIndex]) {
        // rightIndex = middleIndex -1;
        return binarySearch(arr, target, leftIndex, middleIndex -1);
    } else {
        // leftIndex = middleIndex + 1;
        return binarySearch(arr, target, middleIndex+1, rightIndex);

    }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)) //4
console.log(recursiveBinarySearch([-5,2,4,6,10], 6)) //3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)) //-1