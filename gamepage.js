// generation of random value
var y = Math.floor(Math.random() * 10 + 1)
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+"  YOU GUESSED IT RIGHT IN + guess + " GUESS ");
     guess= 1;
}