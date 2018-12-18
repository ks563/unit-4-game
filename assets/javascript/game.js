var magicNum; //will store value of random number
// var minNum = 19; //lower bound of random number
// var maxNum = 121; // upper bound of random number
var crystalValue1 = Math.floor(Math.random() * 13) + 1;
var crystalValue2 = Math.floor(Math.random() * 13) + 1;
var crystalValue3 = Math.floor(Math.random() * 13) + 1;
var crystalValue4 = Math.floor(Math.random() * 13) + 1;
var addedNum; //this will hold the value of pressed button then be added too so we can append it to the div

gameSet();

function getRandomNumber() {
    magicNum = Math.floor(Math.random() * 121) + 19;
    console.log(magicNum);
}


//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    $("#magic-number").append(magicNum);
    $("#crystal-1").attr(crystalValue1); // $("#crystal-1)").val(crystalValue1));
    $("#crystal-2").attr("val", crystalValue2);
    $("#crystal-3").attr("val", crystalValue3);
    $("#crystal-4").attr("val", crystalValue4);
}

// this function will append button presses to guessed letter on button click
$(".btn-group").click(function () {
    addedNum += $(".btn-group").attr($(this).val());
    $("#guessed-number").text(addedNum);
}
)

// console.log(addedNum);

//allows for button values to be added when multiple buttons are pressed 
// need to store value each time a button is clicked and value is adjusted
function buttonAdd() {
    
    // $("#crystal-1").click(+ addedNum);
    // $("#crystal-2").click(+ addedNum);
    // $("#crystal-3").click(+ addedNum);
    // $("#crystal-4").click(+ addedNum);
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