var user_input = "add";


function getOperation(tax){
  
  if(user_input === "add"){
    return function (x,y){
        return (x + y) + tax;
    };
  }
  else{
    return function (x,y){
        return (x - y) + tax;
    };
  }
    
}

function Calculator(operation,a,b,cb){
  var result = operation(a,b);
  cb(result);
}

var tax =1000000;
var opr = getOperation(30);

var result = Calculator(opr,5,5,function(result){
    console.log(result);
});
