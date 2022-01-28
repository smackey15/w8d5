function MovingObject () {}

MovingObject.prototype.speak = function () {
    console.log("hi")
}


Function.prototype.inherits = function(superClass) {
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate(); 
    this.prototype.constructor = this;
}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

let s = new Ship();  
s.speak();
let a = new Asteroid();
a.speak();

// let m = new MovingObject();
// m.speak();

// console.log(m.__proto__);