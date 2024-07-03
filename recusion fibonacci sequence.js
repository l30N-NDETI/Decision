function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const num = parseInt(prompt("Enter a positive integer: "));
  console.log(`The ${num}th Fibonacci number is ${fibonacci(num)}`);