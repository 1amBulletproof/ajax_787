(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'FoundItems',
        bindToController: true
      };
      return ddo;
    }

    function FoundItemsDirectiveController() {}


  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  function NarrowItDownController($scope, MenuSearchService) {
    this.searchTerm = ""
    this.found = []

    this.narrowItDown = function () {
      var filteredMenuItemsPromise = MenuSearchService.getMatchedMenuItems(this.searchTerm)
      filteredMenuItemsPromise.then(function(result) {
        // console.log("got here")
        // console.log(result)
        // console.log($scope)
        $scope.Narrow.found = result
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    this.removeFoundItem = function (indexOfItem) {
      // console.log("removing index " + indexOfItem)
      this.found.splice(indexOfItem, 1)
    }
  }

  MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath']
  function MenuSearchService($q, $http, ApiBasePath) {

    this.getMatchedMenuItems = function (searchTerm) {

      var allMenuItemsPromise = this.getAllMenuItems()
      return allMenuItemsPromise.then(function (allMenuItemData) {
        // console.log(searchTerm)
        // console.log(allMenuItemData);
        // console.log(allMenuItemData.data.menu_items)
        var menuItems = allMenuItemData.data.menu_items
        var filteredMenuItems = []
        for (var i = 0; i < menuItems.length; i++) {
          // console.log(menuItems[i].description)
          if (menuItems[i].description.match(searchTerm)) {
            // console.log(menuItems[i])
            filteredMenuItems.push(menuItems[i])
          }
        }
        // console.log(filteredMenuItems)
        return filteredMenuItems
        })
        .catch(function (error) {
          console.log(error)
        });
      }

    this.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
      return response;
    };

    this.getMenuForCategory = function (shortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: shortName
        }
      });

      return response;
    };

    this.getAllMenuItems = function (shortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      });

      return response;
    };
  }

})();
