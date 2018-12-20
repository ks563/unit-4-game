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
var addedNum = 0; //this will hold the value of pressed button then be added too so we can append it to the div

function getRandomNumber() {
    magicNum = Math.floor(Math.random() * 121) + 19;
    console.log(magicNum);
}


//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    // crystals = randomNumberCrystals();
    $("#magic-number").text(magicNum);
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
    console.log("looping");
    }
}

// worked with will on this - changed .attr() to .val() 
function buttonMath(crystal) {
    $(".btn-group").click(function (event) {
        addedNum + parseInt($(this).val());
        $("#guessed-number").html(addedNum);
        // console.log(addedNum);
        // console.log("this is the data-name" + crystals[crystal.val()]);
        // console.log($(this).val());
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
