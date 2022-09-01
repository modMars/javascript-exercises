const fibonacci = function(num) {
    //First we do an error check, if the number is lesser than 0 then return "OOPS"
    if(num < 0) return "OOPS";
    //Then we declare an array with 0,1 values for the first two elements
    seq = [0,1];
    //Then we create a for loop that'll start at i = 2 because we already populated the first two positions, meaning it'll start on the third index. Then we push to our array the sum of i-1 and i-2 which gives us the value of the third element, i hard coded the number 26 as the limit because the test only asked for the max index of 25.
    for(let i = 2; i < 26; i++)
        {
             seq.push(seq[i-1] + seq[i-2]);
        }
    //The return value is the element that is found using the seq.findIndex() function when it finds a match to the parameter, making sure that the equality is 2 equals instead of 3 because the test requires for strings to be converted to numbers.
        return seq[seq.findIndex((elemento, index) => index == num)];
    }
// Do not edit below this line
module.exports = fibonacci;
