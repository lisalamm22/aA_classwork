const Game = require("./game");


function MovingObject (optionsHash) {
    this.pos = optionsHash["pos"];    
    this.vel = optionsHash["vel"];
    this.radius = optionsHash["radius"];
    this.color = optionsHash["color"];
    this.game = optionsHash["game"];
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );
    ctx.closePath();
    ctx.fill();
}



MovingObject.prototype.move = function() {
    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]]
    this.game.wrap(this.pos)
}

// MovingObject.prototype.isCollidedWith = function(otherMovingObject) {}

module.exports = MovingObject;

// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });