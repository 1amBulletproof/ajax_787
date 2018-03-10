(function () {
'use strict';

angular.module('module_6_app', [])

.controller('MyFirstController', function ($scope) {
  $scope.userInput = "";
  $scope.messageToUser = ""

  $scope.checkUserInput = function () {
    //TODO: Implement this method
    var numberOfEntries = calculateNumberOfEntries($scope.userInput)
    $scope.messageToUser = "Checking User Input....";
  };

  function calculateNumberOfEntries(string) {
      //TODO: Implement this method
    return 0;
  }

});

})();
