var magicNum; //will store value of random number
// var minNum = 19; //lower bound of random number
// var maxNum = 121; // upper bound of random number
var crystals = {
    crystal1: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./assets/images/crystal1.png"

    },
    crystal2: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./assets/images/crystal2.png"
    },
    crystal3: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./assets/images/crystal3.png"

    },
    crystal4: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./assets/images/crystal4.png"
    }
};
var addedNum = 0; 
var guessedVal;

function getRandomNumber() {
    magicNum = Math.floor(Math.random() * 121) + 19;
    console.log(magicNum);
}


//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    // crystals = randomNumberCrystals(); don't need to assign this because moved object to variable
    $("#magic-number").text(magicNum);
    $("#guessed-number").html(addedNum);
    // console.log(crystalValue1);
}

// removed the object from the function and set it equal to the declared variable 
// function randomNumberCrystals() {
//     return 
//     };
// }

function createCrystals() {
    for (var crystal in crystals){
        var crystalButton = $("<button class='crystals-button' value='" + crystals[crystal].points + "'>");
        var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[crystal].image);
        crystalButton.append(crystalImg);
        $(".btn-group").append(crystalButton);
    // console.log("looping");
    }
}

// worked with will on this - changed .attr() to .val() now not getting an error but value of the button is not adding to addedNum
//tried declaring a new variable to store the addedNum plus the button val getting NaN
function buttonMath(crystal) {
    $(".btn-group").click(function (event) {
        var guessedVal= addedNum + parseInt($(this).val());
        $("#guessed-number").text(guessedVal);
        console.log(guessedVal);
        // console.log(addedNum); returns undefined
        // console.log("this is the data-name" + crystals[crystal.val()]);  // this returns an error and I don't know what the error means, it seems specified to the jquery
        // console.log($(this).val());
    }
    )
}

//buttons have values. have tried append method - just makes zeros appear in a row

function checkGame() {
    if (guessedVal === magicNum) {
        wins++;
        gameSet();
    } else if (guessedVal > magicNum) {
        losses++;
        gameSet();
    }
}

gameSet();
createCrystals();
buttonMath($(this));
checkGame();
