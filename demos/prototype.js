var Vehicle = {
    move : function(distance){
        console.log("moving " + distance);
    },
    display : function(){
        console.log(this.make);
    }
};


function Car(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype = Vehicle;


function Boat(make){
    this.make = make;
}
Boat.prototype = Vehicle;

var mustang = new Car("Ford","Mustang",1969);
var tesla = new Car("Tesla","Model s",2015);

var boat = new Boat("some boat co");

tesla.display();
boat.display();
