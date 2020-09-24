const MovingObject = require("./moving_object.js")
const Util = require("./util.js")

Asteroid.COLOR = 'grey';
Asteroid.RADIUS = 50;  
  
function Asteroid(newObj) {
    newObj.color = Asteroid.COLOR;
    newObj.radius = Asteroid.RADIUS;
    newObj.vel = Util.randomVec(5);

    MovingObject.call(this,newObj)
}

Util.inherits(Asteroid, MovingObject)

// new Asteroid({ pos: [30, 30] });

module.exports = Asteroid;
