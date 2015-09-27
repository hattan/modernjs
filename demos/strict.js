
function sum(a, a, c){ // !!! syntax error
  "use strict";
  return a + b + c; // wrong if this code ran
}

console.log(sum(1,2,3));


"use strict";
var foo = "test";
delete foo;
console.log(foo);



"use strict";
title = "test";
console.log(title);

"use strict";
function foo(msg){
   console.log(arguments[0]);
   console.log(msg);
    
   arguments[0] = "danger";   
   console.log(arguments[0]);
   console.log(msg);
}

foo("some value");
*

