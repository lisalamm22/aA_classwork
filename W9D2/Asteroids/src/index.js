console.log("Hi")

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

window.addEventListener("DOMContentLoaded", () => {
    const canvasElement = document.getElementById("game-canvas");
    canvasElement.width = 900;
    canvasElement.height = 900;
    const ctx = canvasElement.getContext("2d");
    window.ctx = ctx;


    // const mo = new MovingObject({
    // pos: [30, 30],
    // vel: [10, 10],
    // radius: 5,
    // color: "red"
    // });

    // mo.draw(ctx);

    // const game1 = new Game();

})


