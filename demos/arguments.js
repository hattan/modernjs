function log(){
    
  /*  for(var i=0,len=arguments.length;i<len;i++){
        console.log(arguments[i]);
    }
  */
    
    var args = Array.prototype.slice.call(arguments);
    
    args.forEach(function(argument){
        console.log(argument);
    });
    
    console.log("-----------------");
}

log("hello");

var a = { name : "bob"};
log(a,a.name);

log(a,"save this",1232);