//Generating 1st random image
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber1st = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomNumber1st); // we used All becausewe wanted to deal with both and not only the first one

//Generating the 2nd random image
var randomNumber2 = Math.floor(Math.random()*6+1);
var randomNumber2nd = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2nd);


// Code for deciding who wins and draw
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player2 wins🚩";
}
else if(randomNumber2 == randomNumber1)
{
    document.querySelector("h1").innerHTML = "Draw!";
}