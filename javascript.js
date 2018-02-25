window.$ = window.jQuery = require('jquery');
window.ondragover = function(event){
  event.preventDefault();
  return false;
}
window.ondrop = function(event){
  event.preventDefault();
  return false;
}
var files = [];
var dropped = function(event){
  event.preventDefault();
  console.log(event);
  for(var i=0; i<event.dataTransfer.files.length; i++){
    files.push(event.dataTransfer.files[i].path);
  }
}
$(document).ready(function(){
})
