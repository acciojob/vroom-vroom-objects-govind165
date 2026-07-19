// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;


function SportsCar(make, model, topSpeed) {
	 Car.call(this, make, model);
	 this.topSpeed = topSpeed;
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

	const car = new Car("Toyota", "Corolla");
console.log(car.make);      
console.log(car.model);     

const sportsCar = new SportsCar("Ferrari", "F8", 340);
console.log(sportsCar.make);      
console.log(sportsCar.model);     
console.log(sportsCar.topSpeed);  
