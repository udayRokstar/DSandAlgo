// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true; 
// }

// // Example usage:
// console.log(isPrime(37)); // true
// // console.log(isPrime(7)); // false e



// ---------------------------------------------------------------------

// function myFunction(a) {
//     for (let i = 2; i <= a - 1; i++) {
//         if (a % i == 0) {
//             console.log("Not Prime");
//             return;
//         }
//     }
//     console.log("Prime");
//     return;
// }

// myFunction(0); // Prime

// ---------------------------------------------------------------------

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1; 
  }

  console.log(isPrime(37)); // true