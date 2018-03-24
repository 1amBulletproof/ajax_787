(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckoffService', ShoppingListCheckoffService)
  .filter('CustomPrice', CustomPriceFilterFactory)

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckoffService'];
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
        quantity: "1",
        pricePerItem: 3.0
      },
      {
        name: "Bread",
        quantity: "2",
        pricePerItem: 2.0
      },
      {
        name: "Eggs",
        quantity: "12",
        pricePerItem: 0.25
      },
      {
        name: "Water Bottles",
        quantity: "24",
        pricePerItem: 0.16
      },
      {
        name: "Beers",
        quantity: "30",
        pricePerItem: 1.0
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
      alreadyBoughtItems.push(toBuyItems[toBuyItemIndex])
      var numberToDelete = 1
      toBuyItems.splice(toBuyItemIndex, numberToDelete)

    }
  }

  function CustomPriceFilterFactory() {
    return function (input) {
      var totalPrice = input.quantity * input.pricePerItem
      var returnPriceString = "$$$" + String(totalPrice)
      return returnPriceString
    };
  }

})();
