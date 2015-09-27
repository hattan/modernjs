
function get(url){
    var deferred = Q.defer();
    var r = new XMLHttpRequest(); 
    r.open("GET", url, true);
    r.onreadystatechange = function () {
	   if (r.readyState == 4){
           if(r.status != 200) {
               deferred.reject(new Error(r.status));
           }
           else{
	           deferred.resolve(r.responseText);
           }
       }
     
    };
    r.send();
    return deferred.promise;
}

 document.addEventListener("DOMContentLoaded", function (event) {   
    var request = get("https://www.reddit.com/r/aww.json");
    request.then(function(response){
        console.log(response);
    });
     
});