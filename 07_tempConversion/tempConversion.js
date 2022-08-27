const ftoc = function(f) {
  let result = (f-32)*5/9
  result = Math.round(result*10)/10; //Rounding the result when f = 100, multiplying by 10 makes the result give us 378 instead of 38 since it's also multiplying the first decimal point which is .77777, and dividing it by 10 will make it round to 37.8.
  return result;
};

const ctof = function(c) {
  let result = c * 9/5 + 32
  result = Math.round(result*10)/10; 
  return result
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
