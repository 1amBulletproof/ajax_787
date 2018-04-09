(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, MenuSearchService) {
    //TODO: create two way binding on input box to get search searchTerm
    this.searchTerm = ""
    //TODO: create method on button to get HTML from server
    this.found = []

    this.narrowItDown = function () {
      var filteredMenuItemsPromise = MenuSearchService.getMatchedMenuItems(this.searchTerm)
      filteredMenuItemsPromise.then(function(result) {
        console.log("got here")
        console.log(result)
        console.log($scope)
        $scope.Narrow.found = result
        // this.found = result
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  }

/*
    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function (response) {
      menu.categories = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

  }

*/

  MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath']
  function MenuSearchService($q, $http, ApiBasePath) {

    this.getMatchedMenuItems = function (searchTerm) {
      console.log("Get Items matching: " + searchTerm)
      console.log("Calling getMenuCategories")

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
        console.log(filteredMenuItems)
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
