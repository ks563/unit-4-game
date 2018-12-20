var magicNum; //will store value of random number
// var minNum = 19; //lower bound of random number
// var maxNum = 121; // upper bound of random number
var crystals;
var addedNum = 0; //this will hold the value of pressed button then be added too so we can append it to the div

function getRandomNumber() {
    magicNum = Math.floor(Math.random() * 121) + 19;
    console.log(magicNum);
}


//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    crystals = randomNumberCrystals();
    $("#magic-number").text(magicNum);
    // console.log(crystalValue1);
}

function randomNumberCrystals() {
    return {
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
}

function createCrystals() {
    for (var crystal in crystals) {
        var crystalButton = $("<button class='crystals-button' data-name='" + crystal + "'>");
        var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[crystal].image);
        crystalButton.append(crystalImg);
        $(".btn-group").append(crystalButton);
    }
}

// this function will append button presses to guessed letter on button click - error is saying attr is undefined
function buttonMath(crystal) {
    $(".btn-group").click(function (event) {
        addedNum += crystals[crystal.attr("data-name")].points;
        $("#guessed-number").append(addedNum);
        console.log(addedNum);
    }
    )
}

function checkGame() {
    if (addedNum === magicNum) {
        wins++;
        gameSet();
    } else if (addedNum > magicNum) {
        losses++;
        gameSet();
    }
}

gameSet();
createCrystals();
buttonMath($(this));
checkGame();
