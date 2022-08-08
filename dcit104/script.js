// to find the avg af all even number less than 1000
// 1. find an arry of all even numbers less than 1000
// 2. Sum them
// 2. find the average of them

let even_numbers = [];
for (let i = 1; i < 10000; i++) {
    if(i % 2 == 0)
    {
        even_numbers.push(i);
    }
    
}
let sum = 0;
for (let i = 0; i < even_numbers.length; i++) {
    sum += i;
    
}

console.log(even_numbers);
let average = sum / even_numbers.length
console.log("Therefore, the average of all the even number less than 10000 is " + average);