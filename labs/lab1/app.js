(function (document, undefined) {
    var add = document.getElementById("add"),
        newTodo = document.getElementById("newTodo");
    
     add.addEventListener("click",function(){
        alert(newTodo.value);
     });
    
    document.addEventListener("DOMContentLoaded", function (event) {

    });
    
    
}(document));


/** Challenge **/
function add(a,b){
    if(typeof a != "nuber"){
        throw "a is the wrong type";
    }    
    
    if(typeof b != "nuber"){
        throw "b is the wrong type";
    }
    
    if(isNaN(a)){
        throw "a is not a number";
    }
    
    if(isNaN(b)){
        throw "b is not a number";
    }
    
    return a + b;
}

try{
    var result = add('a',3);
    console.log(result);
}
catch(e){
    console.log(e);
}