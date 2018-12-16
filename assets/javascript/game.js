var magicNum; //will store value of random number
var minNum = 19; //lower bound of random number
var maxNum = 121; // upper bound of random number
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;


function getRandomNumber() {
    min = Math.ceil(19);
    max = Math.floor(121);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(randomNum);

function gameSet() {
    $("#magic-number").append(randomNum);
    getRandomNumber();
    magicNum = getRandomNumber();
}

