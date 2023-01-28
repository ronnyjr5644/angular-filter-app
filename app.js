(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves',lovesFilter)
.filter('truth',truthfilter);

MsgController.$inject = ['$scope','$filter','lovesFilter'];
function MsgController($scope,$filter,lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost=.45;

  $scope.sayMessage = function () {
    var msg="Yaakov likes to eat healthy snacks at night!"
    var output=$filter('uppercase')(msg);
    return output;
  };
  $scope.sayloveMessage = function () {
    var msg="Yaakov likes to eat healthy snacks at night!"
    msg=lovesFilter(msg);
    // var out=$filter('uppercase')(msg);
    
    return msg;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}
function lovesFilter(){
  return function(input){
    input=input || "";
    input=input.replace("likes","loves");
    return input;
  };
}
function truthfilter(){
  return function(input,target,replace){
    input=input||"";
    input=input.replace(target,replace);
    return input;

}
}

})();
