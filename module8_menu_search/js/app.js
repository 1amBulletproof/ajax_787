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
    this.categories = ""

    this.narrowItDown = function () {
      MenuSearchService.getMatchedMenuItems(this.searchTerm)
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

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {

    this.getMatchedMenuItems = function (searchTerm) {
      console.log("Get Items matching: " + searchTerm)
      console.log("Calling getMenuCategories")

      var menuCategoriesPromise = this.getMenuCategories()
      menuCategoriesPromise.then(function (categories) {
        console.log(categories.data);
        var promises = []
        for (var i = 0; categories.data.length; i++ ) {
          //make an array of all the promises required
          promises += $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params: {
              category: categories.data[1].short_name
            }
          })
        }
        return $q.all(promises)
        })
        .then(function(categoryData) {
          console.log("process the result of every parallel process ?")
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
  }

})();
