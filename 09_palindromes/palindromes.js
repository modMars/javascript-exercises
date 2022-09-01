const palindromes = function (string) {
    //First we need to process the parameter so it lower cases all the words  and also removes any special characters, to do this first we need to use string.toLowerCase() which returns a string with all its letters in lc. After that we used the string.replace() function which takes a regular expression (regex), and replaces every single match with whatever you tell it to, in this case i used a '' which is just an empty space.              a great tool to create the desired regex is this website https://regexr.com/. 
    
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
