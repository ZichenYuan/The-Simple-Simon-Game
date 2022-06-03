var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var randomImage1 = "dice"+randomNumber1+".png";
var randomImage2 = "dice"+randomNumber2+".png";

var randomImage1Sourse = "images/" + randomImage1;
var randomImage2Sourse = "images/" + randomImage2;

document.querySelectorAll ("img")[0].setAttribute("src", randomImage1Sourse);
document.querySelectorAll ("img")[1].setAttribute("src", randomImage2Sourse);

if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML= "Player1 Wins!";
}else if (randomNumber2 > randomNumber1){
  document.querySelector(".container h1").innerHTML= "Player2 Wins!";
}else{
  document.querySelector(".container h1").innerHTML= "Draw";
}
