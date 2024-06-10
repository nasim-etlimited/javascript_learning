const numbers = [1,-2,4,5,6]

// for looping
// let sum1 = 0;
// for (let n of numbers)
//     sum += n;


const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);  
console.log(sum)
