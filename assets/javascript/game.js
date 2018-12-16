var randomNum; //will store value of random number
var minNum = 19; //lower bound of random number
var maxNum = 121; // upper bound of random number

function getRandomNumber() {
    min = Math.ceil(19);
    max = Math.floor(121);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNum = getRandomNumber();
console.log(randomNum);
