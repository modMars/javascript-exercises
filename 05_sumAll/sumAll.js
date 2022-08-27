const sumAll = function(int1, int2) {
    let result = 0;
    //Error catcher
    if(int1 < 0 || int2 < 0 || typeof(int1) != 'number' || typeof(int2) != 'number')
    {
        return "ERROR";
    }
    //Compares both parameters
    if(int1 < int2)
    {
        while(int1 <= int2)
        {
            result += int1;
            int1++
        }
    }
    else if(int1 > int2)
    {
        while(int1 >= int2)
        {
            result += int1;
            int1--
        }
    }
    return result;
};
// Do not edit below this line
module.exports = sumAll;
