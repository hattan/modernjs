(function (document, undefined) {
    
    "use strict";
    var items=[],
    templates=[],
    uids=0;

    loadTemplate("todoTemplate");

    
    
    var add = document.getElementById("add"),
        newTodo = document.getElementById("newTodo");
    
     add.addEventListener("click",function(){
        items.push(new ToDo(newTodo.value,true));
     });
    
    todos.addEventListener("click",function(e){
        var item = items.reduce(function(prev,current,index,array){
            return  (array[index].uid == e.target.id) ? index : prev;
        },null);
        items.splice(item,1);
    });
   
    document.addEventListener("DOMContentLoaded", function (event) {
        Object.observe(items, function(newItem) {
            var list = [],
                template = templates["todoTemplate"];

            items.forEach(function(item){
                list.push(template.render(item));
            });
            todos.innerHTML = list.join('');
        }); 
    });
    
   function loadTemplate(id){
        var template=document.getElementById(id);
        templates[id] = {
            render :(function(){
                var content = template.innerHTML;
                return function(todo){
                    var output = content;
                    for(var prop in todo){
                        if( todo.hasOwnProperty( prop ) ) {
                            output = output.replace("{{" + prop + "}}",todo[prop]);
                        }
                    }
                    output = output.replace("{{uid}}",uids);
                    
                    
                    /*** Challenge **/
                    if(todo.complete){
                        output = output.replace("{{checked}}","checked");
                    }
                    else{
                        output = output.replace("{{checked}}","");
                    }
                    
                    if(!todo.uid)
                        todo.uid = uids;
                    
                    uids++;
                    return output;
                }
            }())
        };
    }
    
    function ToDo(text,complete){
        this.text = text;
        this.complete = complete || false;
    }    
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