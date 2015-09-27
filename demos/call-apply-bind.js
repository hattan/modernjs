function Person(name){
    this.name=name;
}

Person.prototype.speak = function(){
  console.log("Hi I'm " + this.name);
}

var bob = new Person('bob');

bob.speak.car(bob,1,2);
bob.speak.apply(bob,[1,2]);

var talk = bob.speak.bind(bob);
talk();

var talk = bob.speak.bind(bob);
talk();