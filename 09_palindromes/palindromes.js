const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/\W/g , '')
    let newString = '';
    for(let i = string.length-1; i >= 0; i--)
    {
        newString += string[i]
    }
    if(newString == string)
    {
        return true;
    }
    else
        return false
};
console.log(palindromes('Racecar!'))

// Do not edit below this line
module.exports = palindromes;
