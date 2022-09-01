const getTheTitles = function(books) {
    //The perfect function to achieve the goal is map() it basically goes through every object in the array, does whatever you tell the callback function to do and it saves the result into a new array, all i had to do was return each obj.title to make an array of all the titles.
    titles = books.map((obj) => obj.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
