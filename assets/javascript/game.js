//define varibles

var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },

  green:
  {
    name: "Green",
    value: 0
  },

  red:
  {
    name: "Red",
    value: 0
  },

  yellow:
  {
    name: "Yellow",
    value: 0
  },

};


var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


//function to set getRandom with a set number of intergers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//start of the game
var startGame = function(){

  currentScore = 0;

// sets the varable of targetScore to a random number
  targetScore = getRandom(19, 120 );

//giving crystals a random number between 1-12
  crystal.blue.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

//sets the targetScore to the random number between 19-120
  $("#targetScore").html(targetScore);

//sets current score to 0 at the start of the game
  $("#yourScore").html(currentScore);

  console.log("targetScore:" + targetScore);
  console.log("Blue:" + crystal.blue.value + "| Green:" + crystal.green.value + "| Red:" + crystal.red.value + "| Yellow: " + crystal.yellow.value );
}


//pushing the number from the crystal to players score

var setValues = function(crystal){

  currentScore = currentScore + crystal.value;

  $("#yourScore").html(currentScore);

  checkWin();

  console.log("your Score " + currentScore);
}

//checking if player wins and adds to the win or loss section
    var checkWin = function(){
      if(currentScore > targetScore){
        alert("You Lose, Try again!");
          console.log("You Lost");

          lossCount++;

          $("#lossCount").html(lossCount);
      //resets the game after a loss
          startGame();
        }

      else if (currentScore == targetScore) {
        alert("Winner Winner Chicken Dinner!");
        console.log("winner");

        winCount++;

        $("#winCount").html(winCount);
    //resets the game after a win
        startGame();
      }

    }



    startGame();

    $("#blue").on("click", function() {
      setValues(crystal.blue);
    });

    $("#green").on("click", function() {
      setValues(crystal.green);
    });

    $("#red").on("click", function() {
      setValues(crystal.red);
    });

    $("#yellow").on("click", function() {
      setValues(crystal.yellow);
    });
