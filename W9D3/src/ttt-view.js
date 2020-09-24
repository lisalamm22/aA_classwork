const Game = require("./game.js");
const Board = require("./board.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    $("ul").on("click", "li", function(event) {
      let $square = $(event.target)
      $square.addClass("clicked");
      $square.removeClass("unclicked");
      that.makeMove($square);
    })
  }
  
  makeMove($square) {
    let currentPlayer = this.game.currentPlayer
    // debugger
    if (!Board.isValidPos($square.data().pos)) {
      alert('Invalid move! Try again');
    }
    this.game.playMove($square.data().pos);
    $square.text(currentPlayer);
    if (this.game.isOver()){
      const $message = $("<p></p>");
      $message.text(`You win, ${currentPlayer}`);
      this.$el.append($message)
    }
  }
  
  setupBoard() {
    const $grid = $("<ul></ul>").addClass('grid');
    for(let i=0; i<9; i++){
      const $square = $("<li>").addClass("unclicked").data("pos", [Math.floor(i/3),i%3]);
      $grid.append($square);
    };
    this.$el.append($grid);
  }
}


module.exports = View;
