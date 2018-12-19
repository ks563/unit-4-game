var magicNum; //will store value of random number
// var minNum = 19; //lower bound of random number
// var maxNum = 121; // upper bound of random number
var crystals;
var addedNum =0; //this will hold the value of pressed button then be added too so we can append it to the div

function getRandomNumber() {
    magicNum = Math.floor(Math.random() * 121) + 19;
    console.log(magicNum);
}


//function sets game and assigns value to buttons and sets randon number
function gameSet() {
    getRandomNumber();
    crystals = randomNumberCrystals();
    // console.log(crystalValue1);
}

function randomNumberCrystals() {
   return {
       crystal1: {
           points: Math.floor(Math.random() * 13) + 1,
           image: "./images/crystal1.png"
    
        },
        crystal2: {
            points: Math.floor(Math.random() * 13) + 1,
            image: "./images/crystal2.png"
        },
        crystal3: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./images/crystal3.png"
    
        },
    crystal4: {
        points: Math.floor(Math.random() * 13) + 1,
        image: "./images/crystal4.png"
        }
};
    
}

// this function will append button presses to guessed letter on button click
$(".btn-group").click(function (event) {
    addedNum += $(".btn-group").attr($(this).val());
    $("#guessed-number").text(addedNum);
}
)

// console.log(addedNum);


function renderCrystals() {
    for (var crystal in crystals) {
        var crystalButton = $("<button class='crystals-button' data-name='" + crystal + "'>");
        var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[crystal].image);
        crystalButton.append(crystalImg);
        $(".btn-group").append(crystalButton);
    }
    
}

function checkGame() {
    if (addedNum === magicNum) {
        wins++;
        gameSet();
    }
}
    else if{
        (addedNum > magicNum) {
        losses++;
    }
}
    else {
        continue;
    }
 
    gameSet();
}

gameSet();
renderCrystals();