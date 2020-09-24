const MovingObject = require("./moving_object.js")
const Asteroid = require("./asteroid.js")

Game.DIM_X = 900;
Game.DIM_Y = 900;
Game.NUM_ASTEROIDS = 101;

function Game (){
    this.asteroids = [];
    while(this.asteroids.length < Game.NUM_ASTEROIDS){
        this.addAsteroids();
    }
}

Game.prototype.randomPosition = function(){
    const pos_x =  Math.floor(Game.DIM_X * Math.random());
    const pos_y =  Math.floor(Game.DIM_Y * Math.random());
    return {pos: [pos_x, pos_y]}
}

Game.prototype.addAsteroids = function() {
    let newObj = this.randomPosition();
    newObj.game = this;
    let babyAsteroid = new Asteroid(newObj);
    this.asteroids.push(babyAsteroid);
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.asteroids.forEach( function(asteroid) { asteroid.draw(ctx)} );
}

Game.prototype.moveObjects = function(){
    this.asteroids.forEach(function (asteroid) { asteroid.move() });
}

Game.prototype.wrap = function(posObj){ 
    let pos = posObj.pos
    
    if (pos[0] === 0) {posObj.pos[0] = Game.DIM_X}
    else if (pos[0] === Game.DIM_X) {posObj.pos[0] = 0}
    else if (pos[1] === 0) {posObj.pos[1] = Game.DIM_Y}
    else if (pos[1] === Game.DIM_Y) {posObj.pos[1] = 0}
    
    return posObj;
}

module.exports = Game;

