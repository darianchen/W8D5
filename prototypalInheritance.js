Function.prototype.inherits = function (parentClass) {
  // function Surrogate () {};
  // Surrogate.prototype = parentClass.prototype
  // this.prototype = new Surrogate()
  // this.prototype.constructor = this
  this.prototype = Object.create(parentClass.prototype)
}

function MovingObject () {}

MovingObject.prototype.moves = function () {
  console.log(`${this.name} moves!!! woo`)
}

function Ship () {
  this.name = 'ship'
}
Ship.inherits(MovingObject);

function Asteroid () {
  this.name = 'asteroid'
}
Asteroid.inherits(MovingObject);

let ship = new Ship
let asteroid = new Asteroid
ship.moves()
asteroid.moves()

Asteroid.prototype.breaks = function () {
  console.log(`${this.name} breaks`)
}
asteroid.breaks();

Ship.prototype.shoots = function () {
  console.log(`${this.name} shoots!! pew pew`)
}
ship.shoots();
let mo = new MovingObject

mo.breaks();
// mo.shoots()