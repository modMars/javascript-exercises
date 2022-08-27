const removeFromArray = function(arr, ...rem) 
    {
        console.log(rem)
        for(let i = 0; i < arr.length; i++)
        {
            for(let j = 0; j < rem.length; j++)
            {
                if(arr[i] === rem[j])
                {
                    arr.splice(i,1);
                    i--; //The i-- is the key to solving this problem, you have to reduce the index because as the splice function removes values of the array the rest of the values shift to the left, if we were to leave the loop running we would skip the check on a couple of elements.
                }
            }
        }
        return arr;
    }
console.log(removeFromArray([1,2,3,4],3,2))
// Do not edit below this line
module.exports = removeFromArray;
