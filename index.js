
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

var startGame = true;


//functions
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}


function playSound(name){
  var sound = new Audio ("sounds/"+name+".mp3");
  sound.play();
}


function gameOver(){
  var gameOverSound = new Audio ("sounds/wrong.mp3");
  gameOverSound.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart!");
}


function startOver(){
  startGame = true;
  gamePattern = [];
  level =0;

  $(document).on("keypress", function(){
    if (startGame) {
      nextSequence();
      $("h1").text("Level "+level);
    }
    startGame = false;
    });
}


//the computer-generated random sequence
function nextSequence(){

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

  level ++;
  $("h1").text("Level "+level);
  userClickedPattern =[]
}


//To start the game, generate computer sequence
$(document).on("keypress", function(){
  if (startGame) {
    nextSequence();
    $("h1").text("Level "+level);
  }
  startGame = false;
  });


//the user sequence
$(".btn").on("click", function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length);
});


//check the user sequence against the computer nextSequence
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel-1]===userClickedPattern[currentLevel-1]){
    if(gamePattern.length ===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();},200);
    }
  }else{
        gameOver();
        startOver();
    }
  }
