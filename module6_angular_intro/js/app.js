(function () {
'use strict';

angular.module('App', [])
.controller('AppController', AppController);

AppController.$inject = ['$scope'];
function AppController($scope) {
  $scope.userInput = "TEST";
  $scope.messageToUser = "TEST";

  $scope.checkUserInput = function () {
    //TODO: Implement this method
    var numberOfEntries = calculateNumberOfEntries($scope.userInput)
    $scope.messageToUser = "Checking User Input....";
  };

  function calculateNumberOfEntries(string) {
      //TODO: Implement this method
    return 0;
  }

}

})();
