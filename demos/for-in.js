var data = [
    
    { name: "bob" },
    { name: "mike" }
    
];

for(var item in data){
  console.log(item);
}


var person = {
  firstName : "paul",
  lastName  : "anderson",
  user_id : 12345
};

for(var item in person){
  console.log(item + " = " + person[item]);
}

//ES2015

/*
var data = [
    
    { name: "bob" },
    { name: "mike" }
    
];

for(var item of data){
  console.log(item.name);
}*/
