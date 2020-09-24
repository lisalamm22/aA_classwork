const View = require('./ttt-view.js')// require appropriate file
const Game = require('./game.js') // require appropriate file

// document.addEventListener("DOMContentLoaded", function () 

window.View = View;
window.Game = Game;
console.log("Hi")
$(() => {
  
  const newGame = new Game();
  const $figure = $('.ttt');
  const newView = new View(newGame, $figure);
  // newView.setupBoard();
});
