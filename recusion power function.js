function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  const base = parseFloat(prompt("Enter a base number: "));
  const exponent = parseInt(prompt("Enter an exponent: "));
  console.log(`${base} to the power of ${exponent} is ${power(base, exponent)}`);