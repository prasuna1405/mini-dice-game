var randomNumber1= Math.floor(Math.random()*6)+1;
var imgNumber= "dice" + randomNumber1+".png"
var randomNumber2= Math.floor(Math.random()*6)+1;
var imgNumber2= "dice" + randomNumber2+".png"
document.querySelector(".img1").setAttribute("src","./images/"+ imgNumber)
document.querySelector(".img2").setAttribute("src","./images/"+ imgNumber2)
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";   
}
else{
    document.querySelector("h1").innerHTML="Its a Tie!";
}