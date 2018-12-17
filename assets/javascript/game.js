var magicNum; //will store value of random number
var minNum = 19; //lower bound of random number
var maxNum = 121; // upper bound of random number
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;
// var addedNum; //this will hold the value of pressed button then be added too so we can append it to the div

gameSet();
valueAdd();

function getRandomNumber() {
    min = Math.ceil(19);
    max = Math.floor(121);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(randomNum);

//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    magicNum = getRandomNumber();
    $("#magic-number").append(magicNum);
    $("#crystal-1").val(crystalValue1);
    $("#crystal-2").val(crystalValue2);
    $("#crystal-3").val(crystalValue3);
    $("#crystal-4").val(crystalValue4);
}

// this function will append button presses to guessed letter on button click
function valueAdd() {
    $(".button").click(function() {
        addedNum = this.val();
        $("#guessed-letters").append(addedNum);
    }
    )};

//allows for button values to be added
function addition() {
    
}

function checkGame() {
    if (addedNum === magicNum) {
        wins++;
    }
        if(addedNum > magicNum) {
            losses++;
    }
   else {
        //continue game
   } 
    gameSet();
}