// for dice 1
var randomdice1=Math.floor((Math.random()*6)+1)
var diceimage1="images/dice"+randomdice1 +".png";

document.querySelectorAll(".img1")[0].setAttribute("src",diceimage1);

//for dice 2
var randomdice2=Math.floor((Math.random()*6)+1)
var diceimage2="images/dice"+randomdice2 +".png";

document.querySelectorAll(".img2")[0].setAttribute("src",diceimage2);


if (randomdice1>randomdice2){

  document.querySelector("h1").innerHTML=" player 1 wins"
}
if(randomdice1===randomdice2){
  document.querySelector("h1").innerHTML="draw"
}
if(randomdice1<randomdice2){
  document.querySelector("h1").innerHTML="player 2 wins"
}