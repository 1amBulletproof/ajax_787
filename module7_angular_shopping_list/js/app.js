(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckoffService', ShoppingListCheckoffService)
  //.filter('custom', CustomFilterFactory)
  //.filter('truth', TruthFilter);
  //XXXController.$inject ['$scope', '$filter']

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  //function ToBuyController($scope, $filter, customFilter, customFilter) {
  function ToBuyController($scope, ShoppingListCheckoffService) {
    console.log('ToBuyController start')
    console.log($scope)
    this.statement = "To Buy:"

    console.log(ShoppingListCheckoffService)
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckoffService) {
    console.log('AlreadyBoughtController start')
    console.log($scope)
    this.statement = "Already Bought:"
  }

  function ShoppingListCheckoffService() {
    var toBuyItems = [
      {
        name: "Milk",
        quantity: "1"
      },
      {
        name: "Bread",
        quantity: "2"
      },
      {
        name: "Eggs",
        quantity: "12"
      },
      {
        name: "Water Bottles",
        quantity: "24"
      },
      {
        name: "Beers",
        quantity: "30"
      }
    ];

    var alreadyBoughtItems = []

    this.getToBuyItems = function () {
      return toBuyItems;
    }

    this.getBoughtItems = function () {
      return alreadyBoughtItems;
    }

    this.buyAnItem = function(itemIdx) {

    }
  }




})();



/*
  function CustomFilterFactory() {
      return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      };
    }


  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }


//POPULATE LISTS?! - see lecture 17 ng-repeat
(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

})();
*/
