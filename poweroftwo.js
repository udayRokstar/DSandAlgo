// function poweroftwo(n) {
//     if(n<1) return false
//     if(n%2 === 0) return true;
//     return false
// }

// console.log(poweroftwo(1));
// console.log(poweroftwo(2));
// console.log(poweroftwo(5));


function powerBitWise(n) {
    if(n < 1) return false;
    return (n &(n-1)) === 0;
}

console.log(powerBitWise(8));
console.log(powerBitWise(2));
console.log(powerBitWise(5));
console.log(powerBitWise(58));
console.log(powerBitWise(64));
console.log(powerBitWise(101));
console.log(powerBitWise(256));


//Complexcity Bio O = O(1)