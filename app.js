//calculation
function calc(){
	this.a = 0;
	this.b = 0;
	this.c = 0;
	this.soma = function(a, b){
		c = a + b;
	}
	this.resultado = function () {
		return c;
	}
}


/*var n1 = new calc();
n1.soma(10, 20);
console.log(n1.resultado());
*/

calc.prototype.mult = function (a, b){
	c = a * b;
	return c;
}

//example of prototype
/*var n2 = new calc();
console.log(n2.mult(10, 20));
*/

//example of inheritance
function teste(){}
teste.prototype = new calc();
teste.prototype.__proto__ = calc.prototype;

teste.prototype.divi = function (a, b){
	c = a / b;
	return c;
}

var n2 = new teste();
console.log(n2.mult(10, 20));

//Classes, Prototypes, and Inheritance
/*
function Shape () {
	this.X = 0;
	this.Y = 0;
	this.move = function (x, y) 
		{
			this.X = x;
			this.Y = y;
		}

this.distance_from_origin = function () 
	{
		return Math.sqrt(this.X*this.X + this.Y*this.Y);
	}
}

var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());*/



//Prototypes and Inheritance
/*function Shape () {
}
Shape.prototype.X = 0;
Shape.prototype.Y = 0;
Shape.prototype.move = function (x, y) {
	this.X = x;
	this.Y = y;
}
Shape.prototype.distance_from_origin = function () {
	return Math.sqrt(this.X*this.X + this.Y*this.Y);
}
Shape.prototype.area = function () {
	throw new Error("I don't have a form yet");
}


var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());*/