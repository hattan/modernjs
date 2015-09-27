//-----Move DOM interactions out of loops
//before
document.getElementById('target').innerHTML = '';
for(var i = 0; i < array.length; i++) {
  var val = doSomething(array[i]);
  document.getElementById('target').innerHTML += val;
}

//after
var stringBuilder = [];
for(var i = 0; i < array.length; i++) {
  var val = doSomething(array[i]);
  stringBuilder.push(val);
}
document.getElementById('target').innerHTML = stringBuilder.join('');

//----Lazy Initialization-------

//before
var things = $('.ele > .other * div.className');
$('#button').click(function() { things.show() });

//after
$('#button').click(function() { $('.ele > .other * div.className').show() });
