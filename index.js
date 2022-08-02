document.query
// Player 1


var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6 );
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6 );
console.log(randomNumber2);


  document.querySelectorAll("img")[0].setAttribute("src" , `./images/dice${randomNumber1 + 1}.png`);

// if (randomNumber1 === 0) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice1.png");
//
// }
// if (randomNumber1 === 1 ) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice2.png");
// }
// if (randomNumber1 === 2 ) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice3.png");
// }
// if (randomNumber1 === 3 ) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice4.png");
// }
// if (randomNumber1 === 4 ) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice5.png");
// }
// if (randomNumber1 === 5 ) {
//   document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice6.png");
// }
// player2
  document.querySelectorAll("img")[0].setAttribute("src" , `./images/dice${randomNumber2 + 1}.png`);
// if (randomNumber2 === 0) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice1.png");
//
// }
// if (randomNumber2 === 1 ) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice2.png");
// }
// if (randomNumber2 === 2 ) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice3.png");
// }
// if (randomNumber2 === 3 ) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice4.png");
// }
// if (randomNumber2 === 4 ) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice5.png");
// }
// if (randomNumber2 === 5 ) {
//   document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice6.png");
// }


if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = " Players 2 WINS! ";
}
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = " Players 1 WINS! ";}
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = " DRAW! ";}
