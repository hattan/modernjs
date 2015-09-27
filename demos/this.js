var window = global;

function f1(){
  return this;
}

console.log(f1() === window); // global object

/************************************************/
function f2(){
  "use strict"; // see strict mode
  return this;
}

console.log(f2() === undefined);
/************************************************/



function Person(name){
    this.name=name;
}

Person.prototype.speak = function(){
  console.log("Hi I'm " + this.name);
}

var bob = new Person('bob');
var talk = bob.speak;

talk();

//see this.html

