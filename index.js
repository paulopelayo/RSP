
var randomPicture1 = Math.floor(Math.random() * 3) + 1; 

var randomImage1 = "rsp" + randomPicture1 + ".png"; 
var randomImageSource1 = "images/" + randomImage1; 


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src', randomImageSource1)



var randomPicture2 = Math.floor(Math.random() * 3) + 1;
var randomImage2 = "rsp" + randomPicture2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute('src', randomImageSource2)




var rock = "rsp1.png";
var paper = "rsp2.png";
var scissor = "rsp3.png";

if (randomImage1 === rock && randomImage2 === scissor) {
// ROCK WINS!
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p2').innerHTML = " Player 2❌";
    document.querySelector('.p1').innerHTML = "<strong> Player 1⭕</>";
} else if (randomImage1 === scissor && randomImage2 === rock) {
    // ROCK WINS!
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').innerHTML = " Player 1❌";
    document.querySelector('.p2').innerHTML = " Player 2⭕";
} else if (randomImage1 === paper && randomImage2 === rock) {
    // PAPER WINS!
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p2').innerHTML = "Player 2❌";
    document.querySelector('.p1').innerHTML = "Player 1⭕";
} else if (randomImage1 === rock && randomImage2 === paper) {
    // PAPER WINS!
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').innerHTML = " Player 1❌";
    document.querySelector('.p2').innerHTML = "Player 2⭕";
} else if (randomImage1 === scissor && randomImage2 === paper) {
    // SCISSOR WINS!
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p2').innerHTML = " Player 2❌";
    document.querySelector('.p1').innerHTML = " Player 1⭕";
} else if (randomImage1 === paper && randomImage2 === scissor) {
    // SCISSOR WINS!
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p1').innerHTML = " Player 1";
    document.querySelector('.p2').innerHTML = " Player 2 Wins!";
} else {
    document.querySelector('h1').textContent = "DRAW"
};