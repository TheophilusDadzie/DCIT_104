// Name: Theophilus Kanatey Dadzie
// ID: 10961816

function isPrime(num) {
    // check if number is equal to 1
    if (num === 1) {
      return true;
    }
  
    // check if num is greater than 1
    else if (num > 1) {
      // looping through 2 to num-1
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  // sum of prime numbers
  const sum = (arr) =>
  {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
          sum+=i;
      }
  
      return sum
  }
  
  let prime_numbers = []
  
  
  // get all prime numbers between o and 1000
  for (let i = 1; i < 10000; i++) {
      if(isPrime(i))
      {
          prime_numbers.push(i)
      }
  }
  
  console.log(prime_numbers);
  let avg = sum(prime_numbers) / prime_numbers.length
  
  console.log(`Average is: ${avg}`)
  
  
  
