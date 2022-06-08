
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed").fadeOut();
  setTimeout(function(){
    $("#"+currentColor).fadeIn().removeClass("pressed");
  },100);
}

function playSound(name){
  var sound = new Audio ("sounds/"+name+".mp3");
  sound.play();
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeOut();
  setTimeout(function(){
    $("#"+randomChosenColor).fadeIn();
  },100);

  playSound(randomChosenColor);

  level ++;

}

//how to select a type??

$(".btn").on("click", function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
});
