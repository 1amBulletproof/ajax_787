(function () {
'use strict';

angular.module('App', [])
.controller('AppController', AppController);

AppController.$inject = ['$scope'];
function AppController($scope) {
  $scope.userInput = "list comma separated dishes you usually have for lunch*";
  $scope.messageToUser = "";

  $scope.checkUserInput = function () {
    $scope.messageToUser = "Checking User Input....";
    var numberOfEntries = calculateNumberOfEntries($scope.userInput)
    if (numberOfEntries > 0 && numberOfEntries <= 3) {
      $scope.myStyle = getMsgCss("green")
      $scope.messageToUser = "Enjoy!"
    } else if (numberOfEntries > 3) {
      $scope.myStyle = getMsgCss("green")
      $scope.messageToUser = "Too much!"
    } else if (numberOfEntries == 0) {
      $scope.myStyle = getMsgCss("red")
      $scope.messageToUser = "Please enter data first"
    } else {
      $scope.myStyle = getMsgCss("red")
      $scope.messageToUser = "Whoops! There was an error"
    }

  };

  function calculateNumberOfEntries(string) {
    // console.log(string)
    if (string == "") {
      return 0
    }
    var splitString = string.split(',')
    // console.log(splitString)

    //BONUS
    var cleanArray = splitString.filter(function(n){ return n.trim() != ""})
    // console.log(cleanArray)

    return cleanArray.length
  }

  function getMsgCss(color) {
    var style = {}
    style['border'] = "solid"
    style['border-color'] = color
    style['color'] = color
    // console.log(style)
    return style
  }

}

})();
