const fibonacci = (num) => {
  let fibo = [0,1];
  for(i=2; i <= num; i++)
  fibo.push(fibo[i-2]+fibo[i-1]); 
  return fibo;
};

let result = fibonacci(14);
console.log(result);

const isFibonnaci = (num) => {
  const item = result.find(a => a === num)
  if (item === num) {
    return true;
  } else {
    return false;
  }
};

const peloAmorDeDeusFunciona = isFibonnaci(9);
console.log(peloAmorDeDeusFunciona);

  module.exports = {
    fibonacci,
    isFibonnaci
  };
  