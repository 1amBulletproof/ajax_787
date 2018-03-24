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
    this.title = "To Buy:"
    this.toBuyItems = ShoppingListCheckoffService.getToBuyItems();
    console.log(this.toBuyItems)

    console.log(ShoppingListCheckoffService)

    this.buyAnItem = function(index) {
      console.log("Bought item " + index)
      //TODO: call ShoppingListCheckoffService.buyAnItem(index)
      ShoppingListCheckoffService.buyAnItem(index)
    }
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckoffService) {
    console.log('AlreadyBoughtController start')
    console.log($scope)
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

    }
  }

})();
