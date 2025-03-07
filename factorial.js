function factorial(num) {
    let result = 1;
    for (let i = 2; i<=num; i++ ) {
        result = result*i;
    }
    return result;
}

console.log(`Factorial of number ${factorial(5)}`); 