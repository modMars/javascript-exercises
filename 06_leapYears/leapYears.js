const leapYears = function(year) {
    if(year % 4 === 0 && year % 100 != 0)
    {
        return true;
    }
    else if(year % 400 === 0 && year % 100 === 0)
    {
        return true; 
    }
    else
    return false;
};
    console.log(1900 % 400)
    console.log(leapYears(1900))
// Do not edit below this line
module.exports = leapYears;
