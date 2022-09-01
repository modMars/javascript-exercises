const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((first,second) => first+=second)  
};
console.log(sum([1]))


const multiply = function() {
  let total = 0;
  let args = Array.from(arguments)
  args.forEach(num => {
    total *= num;
  });
  return total;
};

const power = function(a,b) {
  let total = a;
  for(let i = 1; i < b; i++)
  {
    total *= a
  }
  return total;
};

const factorial = function(a) {
    if(a === 0 || a === 1)
    {
      return 1;
    }
    else
    return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};