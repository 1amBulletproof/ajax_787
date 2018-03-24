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
    this.title = "To Buy:"
    this.toBuyItems = ShoppingListCheckoffService.getToBuyItems();

    this.buyAnItem = function(index) {
      ShoppingListCheckoffService.buyAnItem(index)
    }
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckoffService) {
    this.title = "Already Bought:"
    this.boughtItems = ShoppingListCheckoffService.getBoughtItems();
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

    this.buyAnItem = function(toBuyItemIndex) {
      console.log(toBuyItems[toBuyItemIndex])

      alreadyBoughtItems.push(toBuyItems[toBuyItemIndex])
      var numberToDelete = 1
      toBuyItems.splice(toBuyItemIndex, numberToDelete)

    }
  }

})();
