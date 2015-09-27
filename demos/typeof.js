/*

console.log(typeof "foo");

console.log(typeof true);

console.log(typeof new Date());

console.log(typeof [1,2,3,4]);

console.log(typeof [1,2,3,4] == typeof (new Error));


console.log("foo" instanceof String);

console.log(typeof true);

console.log(typeof new Date());


if(foo!=undefined){
  console.log(foo);
}

if(typeof foo !== 'undefined'){
  console.log(foo);
}

*/

console.log("foo" instanceof String);
console.log("foo" instanceof Object);

function Person(name,age){
    this.name = name;
    this.page = age;
}

var bob = new Person('bob',24);

console.log(bob instanceof Person);
console.log(typeof bob);

var foo =[1,2,3,4];
console.log(foo.toString());