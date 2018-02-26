var app = angular.module('photoApp',['ngMaterial']);
app.controller('imageController',['$scope', function($scope){
  $scope.files=[];
  $scope.myDrop = function(event){
    event.preventDefault();
    for(var i=0; i<event.dataTransfer.files.length; i++){
      $scope.files.push(event.dataTransfer.files[i].path);
    }
    console.log($scope.files);
    $scope.$apply();
  }
}]);
app.directive("dgDraggable",function(){
  return{
    scope:{
      myDrop: '&dgDrop'
    },
    link: function(scope, element, attrs){
      element.on('drop', function(evt){
        scope.myDrop({event:evt});
      })
    }
  }
});
window.$ = window.jQuery = require('jquery');
window.ondragover = function(event){
  event.preventDefault();
  return false;
}
window.ondrop = function(event){
  event.preventDefault();
  return false;
}
$(document).ready(function(){
  $('#submit-button').click(function(){

  })
})
