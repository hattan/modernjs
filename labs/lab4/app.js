(function (document, undefined) {
    
    "use strict";
    const items=[];
    
    let templates=[],
        uids=0;

    loadTemplate("todoTemplate");

    
    
    let add = document.getElementById("add"),
        newTodo = document.getElementById("newTodo");
    
     add.addEventListener("click", e=>items.push(new ToDo(newTodo.value,true)) );
    
    todos.addEventListener("click",e=>{
        let item = items.reduce(function(prev,current,index,array){
            return  (array[index].uid == e.target.id) ? index : prev;
        },null);
        items.splice(item,1);
    });
   
    document.addEventListener("DOMContentLoaded", event => {
        Object.observe(items, newItem => {
            let list = [],
                template = templates["todoTemplate"];

            items.forEach(item => {
                list.push(template.render(item));
            });
            todos.innerHTML = list.join('');
        }); 
    });
    
   function loadTemplate(id){
        let template=document.getElementById(id);
        templates[id] = {
            render :(()=>{
                let content = template.innerHTML;
                return function(todo){
                    let output = content;
                    for(let prop in todo){
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
                };
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